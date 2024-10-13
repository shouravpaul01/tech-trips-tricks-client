import CommentForm from "@/src/components/form/comment/CommentForm";
import { AddCommentkIcon } from "@/src/components/icons";
import TTTZModal from "@/src/components/modals/TTTZModal";



export default function DetailsPage({params}:{params:string}) {
console.log(params)
  return (
    <TTTZModal
    btnTitle="Comment"
    modalProps={{
      shadow: "lg",
      size: "2xl",
      scrollBehavior: "inside",
      isDismissable: false,
      defaultOpen: true,
      classNames:{
        footer:"flex-col justify-normal border-t"
      }
    }}
    
    btnProps={{
      color: "secondary",
      variant:"light",
      radius:"full",
      className:"text-gray-500",
      endContent: <AddCommentkIcon fill="#999999"  />,
    }}
    isModalOpenCustom={true}
    headerTitle="Create Post"
    footerContent={<CommentForm/>}
  >
   <p>ddd</p>
  </TTTZModal>
  )
}

