import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";

interface PricingPlan {
  title: string;
  price: number;
  features: { label: string; available: boolean }[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Free",
    price: 0,
    features: [
      { label: "Profile Creation", available: true },
      { label: "Join Matches", available: true },
      { label: "Basic Stats", available: true },
      { label: "Ad-free Experience", available: false },
    ],
  },
  {
    title: "Amateur",
    price: 4.99,
    features: [
      { label: "All Free Features", available: true },
      { label: "Ad-free Experience", available: true },
      { label: "Enhanced Stats Tracking", available: true },
      { label: "Match Recommendations", available: true },
    ],
  },
  {
    title: "Pro",
    price: 9.99,
    features: [
      { label: "All Amateur Features", available: true },
      { label: "Performance Analytics", available: true },
      { label: "Priority Booking", available: true },
      { label: "Coaching Tips", available: true },
      { label: "Tournament Access", available: true },
    ],
  },
];

const PlayerPricingTab = () => {
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {pricingPlans?.map((plan, idx) => (
          <Card key={`${idx + 1}`} className=" shadow-none p-6">
            <CardHeader className=" border-b">
              <h2 className=" text-2xl font-bold text-ns-title">
                {plan.title}
              </h2>
              <h2 className=" mt-4 text-2xl  font-bold text-ns-title">
                {plan.price}
                <span className="text-[16px] text-ns-foreground">/month</span>
              </h2>
            </CardHeader>
            <CardContent>
              <ul className=" flex flex-col gap-4">
                {plan?.features?.map((feature, idx) => (
                  <li key={`${idx + 1}`} className={`flex items-center gap-3`}>
                    {feature.available ? (
                      <FaCheck className=" text-ns-primary" />
                    ) : (
                      <RxCross2 className=" text-ns-foreground" />
                    )}
                    <span className=" text-ns-title text-[16px] font-medium">
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-6 flex flex-wrap md:flex-nowrap items-center gap-3">
              <NSButton className=" text-[#0EB1FE] bg-[#eff4f7] rounded-lg w-full flex items-center justify-center gap-1">
                <CiEdit />
                Edit Price
              </NSButton>
              <NSButton className=" text-ns-red bg-red-50 rounded-lg w-full flex items-center justify-center gap-1">
                <AiTwotoneDelete />
                Remove
              </NSButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PlayerPricingTab;
