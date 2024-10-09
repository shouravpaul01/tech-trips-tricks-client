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
  userId:string;
  email:string;
  role:"User" | "Admin";

}