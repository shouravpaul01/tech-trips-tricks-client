import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type TErrorMessage={
  path: string; message: string
}

export type TCurrentUser={
  _id:string;
  name:string;
  profileImage:string;
  userId:string;
  email:string;
  role:"User" | "Admin";

}

export type TSocialLinks = {
  facebook: string;
  twitter: string;
  linkedin: string;
};

export type TStudyInformation = {
  university: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
};
export type TUser = {
  name: string;
  userId: string;
  email: string;
  role:"User" | "Admin";
  gender:"Male" | "Female" | "Other",
  dateOfBirth:Date,
  phoneNumber: string;
  bio: string;
  profileImage: string;
  coverImage: string;
  address: string;
  website: string;
  socialLinks: TSocialLinks;
  studyInformation: TStudyInformation,
  isVerified:boolean,
  createdAt:Date,
  updatedAt:Date
};

export type TPost= {
  _id:string
  user:TUser
  category:string
  images:string[],
  content: string;
  upvotes: number;
  downvotes: number;
  isUpvotedIP: string[];
  isDownvotedIP: string[];
  comments: TComment[]
  isPremium:boolean,
  viewStatus:"Public" | "Hide",
  isDeleted:boolean
}
export type TComment = {
  _id:string;
  user:TUser;
  text: string;
  upvotes: number;
  downvotes: number;
  isUpvotedIP: string[];
  isDownvotedIP: string[];
  post: TPost;
};

export type TQueryArg={
  label:string,value:any
}