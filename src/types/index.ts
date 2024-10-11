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