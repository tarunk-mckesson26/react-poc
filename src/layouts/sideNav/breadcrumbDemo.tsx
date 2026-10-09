import { Button } from "@/components/ui/Button";
import {
  Breadcrumb,
  BreadcrumbDropdownMenu,
  BreadcrumbDropdownMenuContent,
  BreadcrumbDropdownMenuGroup,
  BreadcrumbDropdownMenuItem,
  BreadcrumbDropdownMenuTrigger,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { ChevronDownIcon } from "lucide-react";
import DemoRow from "./demoRow";

const BreadcrumbDemo = () => (
  <DemoRow>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbDropdownMenu>
            <BreadcrumbDropdownMenuTrigger asChild>
              <Button
                size="icon-sm"
                variant="ghost"
                className="focus-visible:ring-0! focus-visible:border-transparent!"
              >
                <BreadcrumbEllipsis />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </BreadcrumbDropdownMenuTrigger>
            <BreadcrumbSeparator />
            <BreadcrumbDropdownMenuContent align="start">
              <BreadcrumbDropdownMenuGroup>
                <BreadcrumbDropdownMenuItem>Documentation</BreadcrumbDropdownMenuItem>
                <BreadcrumbDropdownMenuItem>Themes</BreadcrumbDropdownMenuItem>
                <BreadcrumbDropdownMenuItem>GitHub</BreadcrumbDropdownMenuItem>
              </BreadcrumbDropdownMenuGroup>
            </BreadcrumbDropdownMenuContent>
          </BreadcrumbDropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbDropdownMenu>
            <BreadcrumbDropdownMenuTrigger asChild>
              <button className="flex items-center gap-1">
                Components
                <ChevronDownIcon data-icon="inline-end" className="size-3.5" />
              </button>
            </BreadcrumbDropdownMenuTrigger>
            <BreadcrumbDropdownMenuContent align="start">
              <BreadcrumbDropdownMenuGroup>
                <BreadcrumbDropdownMenuItem>Documentation</BreadcrumbDropdownMenuItem>
                <BreadcrumbDropdownMenuItem>Themes</BreadcrumbDropdownMenuItem>
                <BreadcrumbDropdownMenuItem>GitHub</BreadcrumbDropdownMenuItem>
              </BreadcrumbDropdownMenuGroup>
            </BreadcrumbDropdownMenuContent>
          </BreadcrumbDropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </BreadcrumbList>
    </Breadcrumb>
  </DemoRow>
);

export default BreadcrumbDemo;