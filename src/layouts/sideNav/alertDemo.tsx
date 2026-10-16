import { Alert } from "@/components/ui/Alert";
import {
  BellRingIcon,
  CircleCheck,
  InfoIcon,
  TriangleAlert,
} from "lucide-react";
import DemoRow from "./demoRow";

const AlertDemo = () => (
  <DemoRow>
    <div className="w-full gap-3 flex flex-col">
      <Alert variant="info" Close={true}>
        <BellRingIcon />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
      <Alert variant="alert">
        <TriangleAlert />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
      <Alert variant="error" Close={true}>
        <InfoIcon />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
      <Alert variant="success">
        <CircleCheck />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
      <Alert variant="success-strong" Close={true}>
        <CircleCheck />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
    </div>
  </DemoRow>
);

export default AlertDemo;
