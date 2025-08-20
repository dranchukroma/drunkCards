import { useCallback, useEffect, useRef } from "react";
import { Howl } from "howler";
import { useSettings } from "@providers/SettingProvider";

const useSoundEffect = (src: string) => {
    const { audio } = useSettings();
    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        if (!audio.sounds) {
            soundRef.current?.unload();
            soundRef.current = null;
            return;
        }

        const howl = new Howl({
            src: [src],
            volume: 0.3,
            preload: true,
        });
        soundRef.current = howl;

        return () => {
            howl.unload();
            soundRef.current = null;
        };
    }, [src, audio.sounds]);

    const play = useCallback(() => {
        const howl = soundRef.current;
        if (!audio.sounds || !howl) return;
        try {
            howl.play();
        } catch { }
    }, [audio.sounds]);

    return play;
};

export default useSoundEffect;
