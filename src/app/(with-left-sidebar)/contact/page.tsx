"use client";
import React from "react";
import { CallIcon, MailIcon, MapIcon } from "@/src/components/icons";
import TTTForm from "@/src/components/form/TTTZForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import TTTZInput from "@/src/components/form/TTTZInput";
import TTTZTextArea from "@/src/components/form/TTTZTextarea";
import { Button } from "@nextui-org/button";
import { useTitle } from "@/src/hooks";

export default function ContactUsPage() {
  useTitle("Contact")
  const handleSupport: SubmitHandler<FieldValues> = (data) => {};
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

      {/* Contact Information Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md">
          <MapIcon width={40} height={40} fill="#78A75A" />
          <div className="ml-4">
            <p className="font-semibold">Address</p>
            <p className="text-gray-600">Kalabagan, Dhanmondi</p>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md">
          <MailIcon width={40} height={40} fill="#D16D6A" />
          <div className="ml-4">
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">example@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md">
          <CallIcon width={40} height={40} fill="#789DE5" />
          <div className="ml-4">
            <p className="font-semibold">Phone</p>
            <p className="text-gray-600">+018********</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-2xl">
      <TTTForm onSubmit={handleSupport}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Send Us a Message
        </h2>
       <div className="space-y-4">
       <TTTZInput
          name="email"
          inputProps={{ variant: "underlined", label: "Email" }}
        />
        <TTTZTextArea
          name="message"
          textAreaProps={{ variant: "bordered", label: "Message" }}
        />
       </div>
        <Button color="secondary" className="mt-4">Submit</Button>
      </TTTForm>
      </div>
    </div>
  );
}
