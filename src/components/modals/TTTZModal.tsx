"use client";
import { Button, ButtonProps } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  useDisclosure,
} from "@nextui-org/modal";
import React, { ReactNode, useEffect } from "react";

type TProps = {
  headerTitle: string;
  btnTitle?: string;
  modalProps?: ModalProps | {};
  modalEvents?:MouseEvent;
  btnProps?: ButtonProps;
  children: ReactNode;
  footerContent?: ReactNode;
  isModalClose?: boolean;
  isModalOpenCustom?: boolean;
};
export default function TTTZModal({
  headerTitle,
  btnTitle,
  btnProps,
  children,
  footerContent,
  modalProps,
  modalEvents,
  isModalClose = false,
  isModalOpenCustom = false,
}: TProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  useEffect(() => {
    if (isModalClose) {
      onClose();
    }
    if (isModalOpenCustom) {
      onOpen();
    }
  }, [isModalClose, isModalOpenCustom]);
  // console.log(isModalOpenCustom)
  return (
    <>
      {btnTitle && (
        <Button onPress={onOpen} {...btnProps}>
          {btnTitle}
        </Button>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} {...modalProps} {...modalEvents}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" >
                {headerTitle}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>

              {footerContent && (
                <ModalFooter className="flex-col justify-normal ">
                  {footerContent}
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
