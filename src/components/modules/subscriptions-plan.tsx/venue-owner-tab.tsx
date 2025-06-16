import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import { FaCheck } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";

interface PricingPlan {
  title: string;
  price: number;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Free",
    price: 0,
    features: [
      "Unlimited players and matches",
      "Basic team management",
      "Simple communication too",
      "Standard match scheduling",
      "Basic player stats",
      "One-click social media sharing",
    ],
  },
  {
    title: "Business",
    price: 6.99,
    features: [
      "Everything in Free tier plus",
      "Player ratings system",
      "Team balance visualization tools",
      "Match templates and recurring games",
      "Enhanced communication with RSVPs and polls",
      "Priority venue booking",
      "Custom team branding on social shares",
    ],
  },
  {
    title: "Enterprise",
    price: 14.99,
    features: [
      "Everything in Premium tier plus",
      "Advanced stats and performance tracking",
      "Financial management",
      "Custom roles and permissions",
      "Advanced analytics dashboard",
      "Multi-platform social integration",
      "Series/season management",
    ],
  },
];

const VenueOwnerTab = () => {
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
                    <FaCheck className=" text-ns-primary" />
                    <span className=" text-ns-title text-[16px] font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-6 flex flex-wrap items-center gap-3">
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

export default VenueOwnerTab;
