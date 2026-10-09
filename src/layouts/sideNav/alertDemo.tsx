import { Alert } from "@/components/ui/Alert";
import { BellRingIcon, CircleCheck, InfoIcon, TriangleAlert } from "lucide-react";
import DemoRow from "./demoRow";

const AlertDemo = () => (
  <DemoRow>
    <div className="mx-auto grid grid-cols-1 gap-8 p-8">
      <Alert variant="info">
        <BellRingIcon />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
      <Alert variant="alert">
        <TriangleAlert />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
      <Alert variant="error">
        <InfoIcon />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
      <Alert variant="success">
        <CircleCheck />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
      <Alert variant="success-strong">
        <CircleCheck />
        <Alert name="title">Alert Title</Alert>
        <Alert name="description">This is an alert description.</Alert>
      </Alert>
    </div>
  </DemoRow>
);

export default AlertDemo;