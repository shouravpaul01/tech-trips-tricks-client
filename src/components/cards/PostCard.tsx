import { noImage } from '@/src/constent'
import { TPost } from '@/src/types'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ImageGallery from '../ui/Post/ImageGallery'
import { limitedCharecter } from '@/src/app/utils/limitedCharecter'
import { Button } from '@nextui-org/button'
import { MoreIcon } from '../icons'

export default function PostCard({post}:{post:TPost}) {
    console.log(post)
  return (
    <Card className="max-w-full" radius='sm'>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
         className='rounded-full'
          src={post?.user?.profileImage || noImage}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{post?.user?.name}</p>
          <p className="text-small text-default-500 -mt-[2px]">@{post?.user?.userId}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <div className='mb-2'>
        {limitedCharecter(post?.content,300)}
       <div className='mt-1'>
       <Button variant='light' color='secondary' size='sm' className='font-bold' startContent={<MoreIcon fill='#EA33F7' />}>See more</Button>
       </div>
      </div>
        {
            post?.images?.length>0 && <div>
            <ImageGallery images={post.images}/>
        </div>
        }
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
       
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  )
}
