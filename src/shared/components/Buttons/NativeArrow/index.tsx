import { useNativeArrow } from '@providers/NativeArrowProvider';
import { ArrowContainer } from './NativeArrow.styled'
import { useSettings } from '@providers/SettingProvider';

function NativeArrow() {
    const { visible, onClick } = useNativeArrow()
    const { appTheme } = useSettings();

    return (
        <>{visible
            ? <ArrowContainer onClick={onClick ?? undefined}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.25 9L14 20.25L25.25 31.5" stroke={appTheme.logoColor} stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </ArrowContainer>
            : null}
        </>
    )
}

export default NativeArrow;