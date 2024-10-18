"use client";

import { PostAddIcon } from "@/src/components/icons";
import CreatePostModal from "@/src/components/modals/CreatePostModal";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

export default function CreatePostButton() {
  const modelDisclosure = useDisclosure();
  return (
    <>
      <Button
        color="secondary"
        startContent={<PostAddIcon />}
        className="w-full"
        onPress={() => modelDisclosure.onOpen()}
      >
        Create Post
      </Button>
      <CreatePostModal Disclosure={modelDisclosure} />
    </>
  );
}
