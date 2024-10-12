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
    headerTitle:string;
  btnTitle: string;
  modalProps?: ModalProps | {};
  btnProps?: ButtonProps
  children: ReactNode;
  footerContent?: ReactNode;
  isModalClose?:boolean
} ;
export default function TTTZModal({
    headerTitle,
  btnTitle,
  btnProps,
  children,
  footerContent,
  modalProps,
  isModalClose=false
}: TProps) {
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();

  useEffect(()=>{
    if (isModalClose) {
      onClose()
    }
  },[isModalClose])

  return (
    <>
      <Button
        onPress={onOpen}
        {...btnProps}
      >
      {btnTitle}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} {...modalProps}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {headerTitle}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                {footerContent}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
