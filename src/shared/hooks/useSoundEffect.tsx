import { useSettings } from "@providers/SettingProvider";
import { useEffect, useRef } from "react";
import { Howl } from 'howler'

const useSoundEffect = (src: string) => {
    const { audio } = useSettings(); // { sounds: boolean }
    if(!audio.sounds) return;
    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        soundRef.current = new Howl({
            src: [src],
            volume: 0.3,
            preload: true,
            html5: true // Це краще для мобільних/PWA, особливо на iOS
        });

        return () => {
            soundRef.current?.unload(); // звільнити пам’ять при зміні src
        };
    }, [src]);

    const play = () => {
        if (audio.sounds && soundRef.current) {
            soundRef.current.play();
        }
    };

    return play;
};

export default useSoundEffect;
