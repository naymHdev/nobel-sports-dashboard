import { Card, CardTitle } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import NSInput from "@/components/ui/core/NSInput";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>
      <Card className=" shadow-none border-none p-6 w-full">
        <div className=" w-full">
          <CardTitle className=" text-2xl font-semibold text-ns-title">
            Change Password
          </CardTitle>
        </div>
        {/* ----------------- Update Profile Form ---------------- */}
        <section>
          <form className="space-y-6">
            {/* Current Password */}
            <div className="grid gap-2 relative">
              <Label className="font-semibold text-ns-neutral-dark">
                Current Password
              </Label>
              <NSInput
                type={showCurrent ? "text" : "password"}
                className="w-full pr-10"
                placeholder="************"
              />
              <div
                className="absolute right-3 top-8.5 cursor-pointer"
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {showCurrent ? (
                  <EyeOff className=" text-ns-foreground" size={18} />
                ) : (
                  <Eye className=" text-ns-foreground" size={18} />
                )}
              </div>
            </div>

            {/* New Password */}
            <div className="grid gap-2 relative">
              <Label className="font-semibold text-ns-neutral-dark">
                New Password
              </Label>
              <NSInput
                type={showNew ? "text" : "password"}
                className="w-full pr-10"
                placeholder="************"
              />
              <div
                className="absolute right-3 top-8.5 cursor-pointer"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ? (
                  <EyeOff className=" text-ns-foreground" size={18} />
                ) : (
                  <Eye className=" text-ns-foreground" size={18} />
                )}
              </div>
            </div>

            {/* Confirmed Password */}
            <div className="grid gap-2 relative">
              <Label className="font-semibold text-ns-neutral-dark">
                Confirmed Password
              </Label>
              <NSInput
                type={showConfirm ? "text" : "password"}
                className="w-full pr-10"
                placeholder="************"
              />
              <div
                className="absolute right-3 top-8.5 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  <EyeOff className=" text-ns-foreground" size={18} />
                ) : (
                  <Eye className=" text-ns-foreground" size={18} />
                )}
              </div>
            </div>

            <div>
              <NSButton className="w-full rounded-lg py-3">
                Save Changes
              </NSButton>
            </div>
          </form>
        </section>
      </Card>
    </>
  );
};

export default ChangePassword;
