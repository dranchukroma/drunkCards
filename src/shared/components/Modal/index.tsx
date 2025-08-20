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
    confirmButton: string;
    cancelButton: string;
};

export function Modal({ open, onOpenChange, title, description, confirmButton, cancelButton, onConfirm, onCancel }: ModalProps) {
    const { style } = useSettings();

    return (
        <Dialog.Root open={open}>
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
                                onOpenChange(false); // To change
                            }}
                        >
                            {cancelButton}
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                onConfirm?.();
                                onOpenChange(false);  // To change
                            }}
                        >
                            {confirmButton}
                        </Button>
                    </ButtonRow>
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
