import type { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MoveRight } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { TrendingUp } from "lucide-react";
import { Separator } from "../components/ui/separator";

type CommonCardProps = {
  title: string;
  deadline: string;
  impactLabel: string;
  impactValue: string;
  buttonLabel: string;
  className?: string;
};

const CommonCard: FC<CommonCardProps> = ({
  title,
  deadline,
  impactLabel,
  impactValue,
  buttonLabel,
  className = "",
}) => {
  return (
    <>
      <Card className={`w-full ${className}`.trim()}>
        <CardHeader className="flex gap-2">
          <CardTitle className="w-41">{title}</CardTitle>
          <div className="text-xs font-bold text-blue-500">{deadline}</div>
        </CardHeader>
        <div className="mb-4 p-4">
          <Alert className="flex gap-2.5 bg-green-500">
            <div className="flex items-center text-white">
              <TrendingUp />
            </div>
            <div>
              <AlertDescription className="text-xs text-white">
                {impactLabel}
              </AlertDescription>
              <div className="text-sm font-bold text-white">{impactValue}</div>
            </div>
          </Alert>
        </div>

        <div>
          <Separator />
        </div>

        <CardContent></CardContent>
        <CardFooter className="flex gap-2">
          <Button className="flex items-center bg-blue-500 text-xs text-white hover:bg-blue-600">
            {buttonLabel}
            <MoveRight />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CommonCard;
