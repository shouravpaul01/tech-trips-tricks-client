"use client"
import TTTForm from "@/src/components/form/TTTZForm";
import TTTZInput from "@/src/components/form/TTTZInput";
import { EditIcon } from "@/src/components/icons";
import TTTZModal from "@/src/components/modals/TTTZModal";

export default function EditProfileModal() {
  const handleUpdate=()=>{

  }
  return (
    <TTTZModal
      btnTitle="Edit Profile"
      modalProps={{
        shadow:"lg",
        size:'2xl',
      }}
      btnProps={{
        color: "secondary",
        startContent: <EditIcon width={16} height={16} />,
      }}
      headerTitle="Edit Profile"
      
    >
      <TTTForm onSubmit={handleUpdate}>
         <TTTZInput name="name" inputProps={{variant:"underlined" ,label:"Name"}}/>
      </TTTForm>
    </TTTZModal>
  );
}
