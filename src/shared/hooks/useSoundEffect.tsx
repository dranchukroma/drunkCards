import { useSettings } from "@providers/SettingProvider";
import { useEffect, useRef } from "react";

const useSoundEffect = (src: string) => {
    const { sounds } = useSettings(); // прапорець звуку
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
        audioRef.current.volume = 0.3;
    }, [src]);

    const play = () => {
        if (sounds && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }
    };

    return play;
};

export default useSoundEffect;