import { useNativeArrow } from '@providers/NativeArrowProvider';
import { ArrowContainer } from './NativeArrow.styled'
import { useSettings } from '@providers/SettingProvider';
import useSoundEffect from '@hooks/useSoundEffect';

function NativeArrow() {
    const { visible, onClick } = useNativeArrow()
    const { style } = useSettings();
    const clickSound = useSoundEffect('/sounds/soft-click.wav')


    return (
        <>{visible
            ? <ArrowContainer onClick={() => {
                onClick();
                clickSound();
            }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.25 9L14 20.25L25.25 31.5" stroke={style.appTheme.logoColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </ArrowContainer>
            : null}
        </>
    )
}

export default NativeArrow;