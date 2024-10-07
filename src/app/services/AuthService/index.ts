"use server"

import { FieldValues } from "react-hook-form"
import axiosInstance from "../../lid/AxiosInstance"
import { cookies } from "next/headers"

const registerUser = async(bodyData:FieldValues) => {
  try {
    const {data}=await axiosInstance.post("/auth/register",bodyData)
    if (data?.status) {
      cookies().set("accessToken",data?.data?.accessToken)
    }
    return data
  } catch (error:any) {
    return error?.response?.data
    
  }
}

export default registerUser

