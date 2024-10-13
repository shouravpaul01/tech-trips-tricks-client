
import CommentForm from "../form/comment/CommentForm";
import { AddCommentkIcon } from "../icons";
import TTTZModal from "./TTTZModal";


const PostDetailsModal=({postId}:{postId:string}) =>{
  console.log(postId,"kdiei")
  return (
    <TTTZModal
    // btnTitle="Comment"
    modalProps={{
      shadow: "lg",
      size: "2xl",
      scrollBehavior: "inside",
      isDismissable: postId,
      defaultOpen: true,
      classNames:{
        footer:"flex-col justify-normal border-t"
      }
    }}
  isModalOpenCustom={!!postId}
    // btnProps={{
    //   color: "secondary",
    //   variant:"light",
    //   radius:"full",
    //   className:"text-gray-500",
    //   endContent: <AddCommentkIcon fill="#999999"  />,
    // }}
    headerTitle="Create Post"
    footerContent={<CommentForm/>}
  >
   <p>ddd</p>
  </TTTZModal>
  )
}
export  default PostDetailsModal