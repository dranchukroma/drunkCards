import { useSettings } from '@providers/SettingProvider.tsx'

function AddHomeIos() {
    const { style } = useSettings();

    return (
        <div>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_377_145)">
                    <rect x="1" y="1" width="33" height="33" rx="3" stroke={style.appTheme.logoColor} strokeWidth="2" />
                    <path d="M17.5 9.5V25.5" stroke={style.appTheme.logoColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M25.5 17.5L9.5 17.5" stroke={style.appTheme.logoColor} strokeWidth="2" strokeLinecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_377_145">
                        <rect width="35" height="35" fill={style.appTheme.logoColor} />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default AddHomeIos;