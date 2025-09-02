import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const usePwaRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // const skipPWA = localStorage.getItem('skipPWA');
        // if(skipPWA) return;

        const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
        const isStandaloneIOS = (window.navigator as any).standalone === true;

        const getMobileOS = (): "Android" | "iOS" | "unknown" => {
            const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

            if (/android/i.test(userAgent)) return "Android";
            if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) return "iOS";
            return "unknown";
        };

        const getBrowser = (): string => {
            const userAgent = navigator.userAgent;
            if (/Chrome/.test(userAgent) && !/Edge|OPR/.test(userAgent)) return "Chrome";
            if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) return "Safari";
            if (/Firefox/.test(userAgent)) return "Firefox";
            if (/OPR/.test(userAgent)) return "Opera";
            if (/Edg/.test(userAgent)) return "Edge";
            return "unknown";
        };

        const os = getMobileOS();
        const br = getBrowser();
        const isMobile = (os === "Android" || os === "iOS");

        if (isMobile && !(isStandalone || isStandaloneIOS)) {
            const query = `?browser=${br}&mobileOS=${os}`;
            navigate(`/PwaInstall${query}`, { replace: true });
        }
        //  else {
        //     localStorage.setItem('skipPWA', 'true');
        // }
    }, [navigate]);
};
