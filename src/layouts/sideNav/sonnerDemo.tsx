import { successIcon, alertIcon } from "@/assets";
import { Sonner } from "@/components/ui/Sonner";

const SonnerDemo = () => (
  <div className="flex flex-row w-full gap-4 p-8">
    <Sonner
      text="Title Text"
      description="Your changes have been saved."
      icon={<img src={successIcon} alt="Success" />}
      fill="success"
    />
    <Sonner
      text="Title Text"
      description="The upload failed. Please try again."
      icon={<img src={alertIcon} alt="Error" />}
      fill="error"
    />
  </div>
);

export default SonnerDemo;