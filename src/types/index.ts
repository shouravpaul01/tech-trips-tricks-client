import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type TErrorMessage = {
  path: string;
  message: string;
};

export type TCurrentUser = {
  _id: string;
  name: string;
  profileImage: string;
  userId: string;
  email: string;
  role: "User" | "Admin";
};

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
export type TSubscribtion = {
  _id:string;
  user: string;
  plan: "1 month" | "6 months" | "1 year";
  transactionId:string;
  amount: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
};
export type TUser = {
  _id: string;
  name: string;
  userId: string;
  email: string;
  role: "User" | "Admin";
  gender: "Male" | "Female" | "Other";
  dateOfBirth: Date;
  phoneNumber: string;
  bio: string;
  profileImage: string;
  coverImage: string;
  address: string;
  website: string;
  socialLinks: TSocialLinks;
  studyInformation: TStudyInformation;
  isSubscribed: boolean;
  subscription:TSubscribtion;
  isActive:boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TPost = {
  _id: string;
  user: TUser;
  type: "Free" | "Premium";
  category: string;
  images: string[];
  content: string;
  upvotes: number;
  downvotes: number;
  isUpvotedIP: string[];
  isDownvotedIP: string[];
  comments: TComment[];
  isPremium: boolean;
  viewStatus: "Public" | "Hide";
  isDeleted: boolean;
};
export type TComment = {
  _id: string;
  user: TUser | string;
  text: string;
  upvotes: number;
  downvotes: number;
  isUpvotedIP: string[];
  isDownvotedIP: string[];
  post: TPost;
};

export type TQueryArg = {
  label: string;
  value: any;
};
export type TSubscrptionPlanOptions = {
  plan: "1 Month" | "6 Months" | "1 Year";
  amount: number;
  features: string[];
};

export type TUpdateRoleQuery = { email: string; role: string };
export type TUpdateActiveStatusQuery = { email: string; isActive: boolean };
