import {useSettings} from '@providers/SettingProvider.tsx'

function ThreeDotsMenuButton() {
    const { style } = useSettings();
    return (
            <div style={{
                width: 35, 
                height: 35,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div style={{ height: 8, width: 8, marginBottom: 4, backgroundColor: style.appTheme.logoColor, borderRadius: "50%"}}/>
                <div style={{ height: 8, width: 8, marginBottom: 4, backgroundColor: style.appTheme.logoColor, borderRadius: "50%"}}/>
                <div style={{ height: 8, width: 8, backgroundColor: style.appTheme.logoColor, borderRadius: "50%"}}/>
            </div>
    )
}

export default ThreeDotsMenuButton;