import { CheckIcon, PremiumIcon } from "@/src/components/icons";
import { subscrptionPlanOptions } from "@/src/constent";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import SubscriptionButton from "./_components/SubscriptionButton";
import { Metadata } from "next";

export const metadata:Metadata={
  title:{absolute:"Premium"}
}
export default function PremiumPage() {
  
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-4">
        <div className="mx-auto max-w-screen-md text-center mb-4 lg:mb-8">
          <div className="flex justify-center">
            {" "}
            <p className="animate-bounce">    <PremiumIcon height={100} width={100} fill="#17c964" /></p>
        
          </div>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Join Our Premium Membership
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Upgrade your membership and get full access to all premium
            resources.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-4 xl:gap-8 lg:space-y-0">
          {subscrptionPlanOptions?.map((item, index) => (
            <Card
              key={index}
              classNames={{
                base: "border-s border-secondary rounded-md p-0  hover:border border-secondary rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-secondary",
              }}
            >
              <CardBody className=" p-0 ">
                <div className="flex  my-4">
                  <p className="text-white font-semibold  rounded-e-full py-2 px-5 bg-secondary ">
                    {item.plan}
                  </p>
                </div>
                <div className="p-3 pb-2">
                  <div className="flex justify-center items-baseline my-6">
                    <span className="mr-2 text-3xl font-extrabold">
                      {item.amount}TK
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /{item?.plan?.toLowerCase()}
                    </span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {item?.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <SubscriptionButton subscriptionPlan={item}/>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
