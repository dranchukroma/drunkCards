import { useSettings } from "@providers/SettingProvider";
import { ProgressBar, TimeLeft, TimerContainer } from "./TimerWidget.styled";
import { useEffect, useState } from "react";
import Infinity from "@components/Icons/Infinity";
import { useGameStore } from "storage/gameStorage";

type TimerWidgetProps = {
    gameMinutes: number;
}

type TimeLeft = {
    hours: string;
    minutes: string;
    seconds: string;
}
function TimerWidget({ gameMinutes }: TimerWidgetProps) {
    const phase = useGameStore.getState().phase;
    const setPhase = useGameStore.getState().setPhase;

    const { style, game } = useSettings();
    const gameSeconds = gameMinutes * 60;
    const [secondsLeft, setSecondsLeft] = useState(gameSeconds);
    const progress = game.infinityTime ? 100 : (((gameSeconds - secondsLeft) / gameSeconds) * 100);

    const formatTimePart = (n: number) => String(n).padStart(2, '0');

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

    useEffect(() => {
        if (
            phase === 'idle' || 
            phase === 'modal' || 
            phase === 'ended' || 
            game.infinityTime) return;
        const interval = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setPhase('modal');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [phase]);

    useEffect(() => {
        setTimeLeft(getTimeLeft(secondsLeft));
    }, [secondsLeft]);

    return (
        <TimerContainer
            $bgColor={style.appTheme.toggleBackground}
            $shadows={style.appTheme.boxShadow}
        >
            <ProgressBar
                $width={progress}
                $progressColor={style.appTheme.uiSelected}
            />
            <TimeLeft $color={style.appTheme.fontColor}>
                {game.infinityTime ? <Infinity /> : (timeLeft.hours + ':' + timeLeft.minutes + ':' + timeLeft.seconds)}
            </TimeLeft>
        </TimerContainer>
    )
}

export default TimerWidget;