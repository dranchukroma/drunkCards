import { useSettings } from '@providers/SettingProvider.tsx'

function AddHomeAndroid() {
    const { style } = useSettings();

    return (
        <div>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.25 1.47308L11.6667 1.4585C10.0625 1.4585 8.75 2.771 8.75 4.37516V8.75016H11.6667V7.29183H26.25V27.7085H11.6667V26.2502H8.75V30.6252C8.75 32.2293 10.0625 33.5418 11.6667 33.5418H26.25C27.8542 33.5418 29.1667 32.2293 29.1667 30.6252V4.37516C29.1667 2.771 27.8542 1.47308 26.25 1.47308ZM14.5833 21.8752H17.5V11.6668H7.29167V14.5835H12.5271L4.375 22.7356L6.43125 24.7918L14.5833 16.6397V21.8752Z" fill={style.appTheme.logoColor} />
            </svg>
        </div>
    )
}

export default AddHomeAndroid;