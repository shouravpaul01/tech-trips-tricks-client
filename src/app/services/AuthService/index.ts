"use server"

import { FieldValues } from "react-hook-form"
import axiosInstance from "../../lid/AxiosInstance"

const registerUser = async(bodyData:FieldValues) => {
  console.log(bodyData,'3')
  try {
    const {data}=await axiosInstance.post("/auth/register",bodyData)
    console.log(data,'data')
    return data
  } catch (error:any) {
    console.log(error)
    return error?.response?.data
    
  }
}

export default registerUser

