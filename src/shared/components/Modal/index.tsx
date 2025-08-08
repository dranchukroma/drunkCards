import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, Title, ButtonRow, Button, Description } from './Modal.styled'
import { useSettings } from "@providers/SettingProvider";

type ModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    btn1Test: string;
    btn2Test: string;
};

export function Modal({ open, onOpenChange, title, description, btn1Test, btn2Test, onConfirm, onCancel }: ModalProps) {
    const { style } = useSettings();

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Overlay />
                <Content
                    $bgColor={style.appTheme.uiSelected}
                    $color={style.appTheme.fontColor}
                    $shadows={style.appTheme.boxShadow}
                >
                    <Title>{title}</Title>
                    {description && <Description>{description}</Description>}
                    <ButtonRow>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                onCancel?.();
                                onOpenChange(false);
                            }}
                        >
                            {btn2Test}
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                onConfirm?.();
                                onOpenChange(false);
                            }}
                        >
                            {btn1Test}
                        </Button>
                    </ButtonRow>
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
