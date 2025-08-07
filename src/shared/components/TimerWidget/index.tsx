import { useSettings } from "@providers/SettingProvider";
import { ProgressBar, TimeLeft, TimerContainer } from "./TimerWidget.styled";
import { useEffect, useState } from "react";
import Infinity from "@components/Icons/Infinity";

type TimerWidgetProps = {
    gameMinutes: number;
    showEndGameModal: () => void;
    startTimer: boolean;
}

type TimeLeft = {
    hours: string;
    minutes: string;
    seconds: string;
}
function TimerWidget({ gameMinutes, showEndGameModal, startTimer }: TimerWidgetProps) {
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
        if (!startTimer || game.infinityTime) return;
        const interval = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    showEndGameModal();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [startTimer]);

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