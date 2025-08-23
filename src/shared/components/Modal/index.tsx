import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, Title, ButtonRow, Button, Description } from './Modal.styled'
import { useSettings } from "@providers/SettingProvider";
import useSoundEffect from "@hooks/useSoundEffect";
import { useEffect } from "react";

type ModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmButton: string;
    cancelButton: string;
    openSound?: () => void;
};

export function Modal({ open, onOpenChange, title, description, openSound, confirmButton, cancelButton, onConfirm, onCancel }: ModalProps) {
    const { style } = useSettings();
    const clickSound = useSoundEffect('/sounds/soft-click.wav');

    useEffect(() => {
        if (open) {
            openSound?.();
        }
    }, [open, openSound]);

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
                            $variant="secondary"
                            onClick={() => {
                                clickSound();
                                setTimeout(() => {
                                    onCancel?.();
                                    onOpenChange(false); // To change
                                }, 150);
                            }}
                        >
                            {cancelButton}
                        </Button>
                        <Button
                            $variant="primary"
                            onClick={() => {
                                clickSound();
                                setTimeout(() => {
                                    onConfirm?.();
                                    onOpenChange(false);  // To change
                                }, 150);
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
