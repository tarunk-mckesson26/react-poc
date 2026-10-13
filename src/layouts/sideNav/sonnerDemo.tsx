import { CircleCheck, CircleX } from "lucide-react";
import { Sonner } from "@/components/ui/Sonner";

const SonnerDemo = () => (
  <div className="flex flex-row max-w-lg gap-4 p-8">
    <Sonner
      text="Success"
      description="Your changes have been saved."
      icon={<CircleCheck />}
      fill="success"
    />
    <Sonner
      text="Error"
      description="The upload failed. Please try again."
      icon={<CircleX />}
      fill="error"
    />
  </div>
);

export default SonnerDemo;