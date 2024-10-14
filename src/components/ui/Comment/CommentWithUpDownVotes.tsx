import { Button } from '@nextui-org/button'
import React from 'react'
import { AddCommentkIcon, ThumbDownkIcon, ThumbUpkIcon } from '../../icons'
import { TPost } from '@/src/types'
import { UseDisclosureProps } from '@nextui-org/modal'

export default function CommentWithUpDownVotes({post,modalDisclosure}:{post:TPost,modalDisclosure?:UseDisclosureProps}) {

  return (
    <div className="flex items-center w-full">
    <div className="flex-1">
      <Button isIconOnly variant="light" color="secondary" radius="full">
        <ThumbUpkIcon fill="#999999" />
      </Button>
      <Button isIconOnly variant="light" color="secondary" radius="full">
        <ThumbDownkIcon fill="#999999" />
      </Button>
    </div>
    <div className="">
      {/* <p>10 Comments</p> */}
      <Button variant="light" color="secondary" size="sm" radius="full" endContent={<AddCommentkIcon fill='#999999'/>} onPress={modalDisclosure &&modalDisclosure.onOpen}>{post?.comments?.length} Comments</Button>
    </div>
  </div>
  )
}
