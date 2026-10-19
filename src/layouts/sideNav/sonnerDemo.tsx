import { successIcon, alertIcon } from "@/assets";
import { Sonner } from "@/components/ui/Sonner";

const SonnerDemo = () => (
  <>
  <div className="flex flex-row w-full gap-4 p-8">
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium">Success</h3>
    <Sonner
      text="Title Text"
      description="Your changes have been saved."
      icon={<img src={successIcon} alt="Success" />}
      fill="success"
    />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium">Error</h3>
    <Sonner
      text="Title Text"
      description="The upload failed. Please try again."
      icon={<img src={alertIcon} alt="Error" />}
      fill="error"
    />
    </div>
  </div>
  <div className="flex flex-col gap-2 p-8">
    <h3 className="text-sm font-medium">Optional Button</h3>
    <Sonner
      text="Changes saved"
      description="Your changes have been saved successfully."
      icon={<img src={successIcon} alt="Success" />}
      fill="success"
      isbutton={true}
      buttonText="button"
    />
  </div>
  </>
);

export default SonnerDemo;