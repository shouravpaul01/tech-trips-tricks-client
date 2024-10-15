"use client";

import {  EditIcon, EditOffIcon, NOImageIcon } from "@/src/components/icons";
import TTTZModal from "@/src/components/modals/TTTZModal";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import PersonalInfoUpdate from "./PersonalInfoUpdate";
import { TUser } from "@/src/types";


export default function EditProfileModal({user}:{user:TUser}) {
  
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  
  return (
    <TTTZModal
      btnTitle="Edit Profile"
      modalProps={{
        shadow: "lg",
        size: "2xl",
        scrollBehavior:"inside"
      }}
      btnProps={{
        color: "secondary",
        startContent: <EditIcon width={16} height={16} />,
      }}
      headerTitle="Edit Profile"
    >
       <Accordion defaultExpandedKeys={["theme"]} >
      <AccordionItem
        key="theme"
        aria-label="Theme"
        indicator={({ isOpen }) => (isOpen ? <EditOffIcon fill="#7828C8"/>:<EditIcon fill="#7828C8"/> )}
        title="Personal Info"
      >
       <PersonalInfoUpdate user={user}/>
      </AccordionItem>
      <AccordionItem
        key="anchor"
        aria-label="Anchor"
        indicator={({ isOpen }) => (isOpen ? <EditOffIcon fill="#7828C8"/>:<EditIcon fill="#7828C8"/> )}
        title="Professional Info"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="sun"
        aria-label="Sun"
        indicator={({ isOpen }) => (isOpen ? <EditOffIcon fill="#7828C8"/>:<EditIcon fill="#7828C8"/> )}
        title="Educational Info"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
      
    </TTTZModal>
  );
}
