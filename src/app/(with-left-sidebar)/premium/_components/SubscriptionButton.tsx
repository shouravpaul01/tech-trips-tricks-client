"use client";

import { PremiumIcon, VerifiedIcon } from "@/src/components/icons";
import { useUser } from "@/src/context/user.provider";
import useCreateSubscription from "@/src/hooks/SubscriptionHook";
import { TSubscrptionPlanOptions } from "@/src/types";
import { Button } from "@nextui-org/button";

export default function SubscriptionButton({
  subscriptionPlan,
}: {
  subscriptionPlan: TSubscrptionPlanOptions;
}) {
  const { user } = useUser();

  const { mutate: createSubscription } = useCreateSubscription();
  const handleSubscription = (data: {
    plan: string;
    amount: number;
    user?: string;
  }) => {
    data.user = user?._id;

    createSubscription(data);
  };
  return (
    <Button
      variant="ghost"
      color="secondary"
      onPress={() =>
        handleSubscription({
          plan: subscriptionPlan.plan,
          amount: subscriptionPlan.amount,
        })
      }
      startContent={<PremiumIcon fill={"#17c964"} />}
      className="w-full font-semibold mb-2"
    >
      Choose Plan
    </Button>
  );
}
