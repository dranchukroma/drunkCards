import { useSettings } from "@providers/SettingProvider";
import { ProgressBar, TimeLeft, TimerContainer } from "./TimerWidget.styled";
import { useEffect, useMemo, useRef, useState } from "react";
import Infinity from "@components/Icons/Infinity";
import { useGameStore } from "storage/gameStorage";

type TimerWidgetProps = {
    gameMinutes: number;
    resetTimer: boolean;
    setResetTimer: (state: boolean) => void;
};

type TimeLeft = {
    hours: string;
    minutes: string;
    seconds: string;
};

function TimerWidget({ gameMinutes, resetTimer, setResetTimer }: TimerWidgetProps) {
    // ✅ підписка через селектори (а не .getState())
    const phase = useGameStore((s) => s.phase);
    const setPhase = useGameStore((s) => s.setPhase);

    const { style, game } = useSettings();

    // перерахунок тільки коли змінюється ліміт
    const gameSeconds = useMemo(() => gameMinutes * 60, [gameMinutes]);

    const [secondsLeft, setSecondsLeft] = useState<number>(gameSeconds);

    // тримаємо актуальну фазу у ref, щоб не перезапускати інтервал
    const phaseRef = useRef(phase);
    useEffect(() => {
        phaseRef.current = phase;
    }, [phase]);

    const formatTimePart = (n: number) => String(n).padStart(2, "0");

    const getTimeLeft = (totalSeconds: number): TimeLeft => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return {
            hours: formatTimePart(hours),
            minutes: formatTimePart(minutes),
            seconds: formatTimePart(seconds),
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(gameSeconds));

    // коли міняється ліміт часу — оновлюємо секунди та вивід
    useEffect(() => {
        setSecondsLeft(gameSeconds);
        setTimeLeft(getTimeLeft(gameSeconds));
    }, [gameSeconds]);

    // окремий ефект для resetTimer
    useEffect(() => {
        if (resetTimer) {
            setSecondsLeft(gameSeconds);
            setTimeLeft(getTimeLeft(gameSeconds));
            setResetTimer(false);
        }
    }, [resetTimer, gameSeconds, setResetTimer]);

    // головний інтервал — НЕ залежить від phase, щоб не зупинявся при кліках
    useEffect(() => {
        if (game.infinityTime) return; // без таймера в infinity режимі

        const id = window.setInterval(() => {
            const currentPhase = phaseRef.current;
            // у "idle"/"ended" не тікаємо час (паузимо)
            if (currentPhase === "idle" || currentPhase === "ended") return;

            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    // завершення гри
                    clearInterval(id);
                    setPhase("ended");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(id);
    }, [game.infinityTime, setPhase, gameSeconds]);
    // примітка: коли gameSeconds зміниться, інтервал перезапуститься коректно

    // форматування кожного тіку
    useEffect(() => {
        setTimeLeft(getTimeLeft(secondsLeft));
    }, [secondsLeft]);

    const progress = useMemo(() => {
        if (game.infinityTime) return 100;
        if (gameSeconds === 0) return 100;
        return ((gameSeconds - secondsLeft) / gameSeconds) * 100;
    }, [game.infinityTime, gameSeconds, secondsLeft]);

    return (
        <TimerContainer
            $bgColor={style.appTheme.toggleBackground}
            $shadows={style.appTheme.boxShadow}
        >
            <ProgressBar $width={progress} $progressColor={style.appTheme.uiSelected} />
            <TimeLeft $color={style.appTheme.fontColor}>
                {game.infinityTime
                    ? <Infinity />
                    : `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}
            </TimeLeft>
        </TimerContainer>
    );
}

export default TimerWidget;
