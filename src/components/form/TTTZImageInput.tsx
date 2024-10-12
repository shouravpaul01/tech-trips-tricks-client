"use client"
import { useFormContext } from "react-hook-form";
import { CameraIcon } from "../icons";
import { ChangeEvent } from "react";

type TProps = {
  label?: string;
  name: string;
  onChange?:(e: ChangeEvent<HTMLInputElement>) => void;
  multiple?:any
};
export default function TTTZImageInput({
  label = "Upload File",
  name,
  onChange,
  multiple=false
}: TProps) {
  const {
    
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files 
    
    if (onChange) onChange(e);

    
    if (file && !multiple) {

      setValue(name, file[0]); // Store the file in form state
    }
  };

  return (
    <>
      <label
        htmlFor={name}
        className="h-10 border-2 rounded-md max-w-full  flex items-center justify-center"
      >
        <label className="flex gap-2 text-gray-400 text-center font-semibold ">
          {<CameraIcon />}
          {label}
        </label>
        <input
          {...register(name)}
          id={name}
          type="file"
          className="hidden"
          multiple={multiple}
          onChange={handleFileChange}
        />
      </label>
      {errors[name] && (
        <p className="text-red-400 text-sm">{errors[name].message as string}</p>
      )}
    </>
  );
}
