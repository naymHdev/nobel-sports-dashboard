import { Card, CardTitle } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import NSInput from "@/components/ui/core/NSInput";
import { Label } from "@/components/ui/label";

const EditProfileTab = () => {
  return (
    <>
      <Card className=" shadow-none border-none p-6 w-full">
        <div className=" w-full">
          <CardTitle className=" text-2xl font-semibold text-ns-title">
            Edit Your Profile
          </CardTitle>
        </div>
        {/* ----------------- Update Profile Form ---------------- */}
        <section>
          <form className=" space-y-6">
            <div className=" grid gap-2">
              <Label className=" font-semibold text-ns-neutral-dark">
                User Name
              </Label>
              <NSInput
                type="text"
                className=" w-full"
                placeholder="Justyna Bronowicka"
              />
            </div>
            <div className=" grid gap-2">
              <Label className=" font-semibold text-ns-neutral-dark">
                Email
              </Label>
              <NSInput
                type="email"
                className=" w-full"
                placeholder="zFg9r@example.com"
              />
            </div>
            <div className=" grid gap-2">
              <Label className=" font-semibold text-ns-neutral-dark">
                Contact no
              </Label>
              <NSInput
                type="text"
                className=" w-full"
                placeholder="+123 456 789"
              />
            </div>
            <div>
              <NSButton className=" w-full rounded-lg py-3">
                Save Changes
              </NSButton>
            </div>
          </form>
        </section>
      </Card>
    </>
  );
};

export default EditProfileTab;
