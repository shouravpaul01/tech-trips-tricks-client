import { CheckIcon, VerifiedIcon } from "@/src/components/icons";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";

export default function PremiumPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-4">
        <div className="mx-auto max-w-screen-md text-center mb-4 lg:mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Pricing
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Choose plan your comport zone
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-4 xl:gap-8 lg:space-y-0">
          <Card>
            <CardBody>
              <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$29</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">1 developer</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <Button
                color="secondary"
                startContent={<VerifiedIcon fill={"#FFFFFF"} />}
              >
                Choose Plan
              </Button>
            </CardBody>
          </Card>

          
        </div>
      </div>
    </section>
  );
}
