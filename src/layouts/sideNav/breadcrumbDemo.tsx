import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ChevronDownIcon } from "lucide-react";
import DemoRow from "./demoRow";

const BreadcrumbDemo = () => (
  <DemoRow>
    <div className="mx-auto grid grid-cols-3 gap-8 p-8">
      <Breadcrumb>
        <Breadcrumb name="List">
          <Breadcrumb name="Item">
            <Breadcrumb name="Link" href="#">
              Breadcrumb
            </Breadcrumb>
          </Breadcrumb>

          <Breadcrumb name="Separator" />

          <Breadcrumb name="Item">
            <Breadcrumb name="DropdownMenu">
              <Breadcrumb name="DropdownMenuTrigger" aria-label="Toggle menu">
                <Breadcrumb name="Ellipsis" />
              </Breadcrumb>

              <Breadcrumb name="Separator" />

              <Breadcrumb name="DropdownMenuContent">
                <Breadcrumb name="DropdownMenuGroup">
                  <Breadcrumb name="DropdownMenuItem">Documentation</Breadcrumb>

                  <Breadcrumb name="DropdownMenuItem">Themes</Breadcrumb>

                  <Breadcrumb name="DropdownMenuItem">GitHub</Breadcrumb>
                </Breadcrumb>
              </Breadcrumb>
            </Breadcrumb>
          </Breadcrumb>

          <Breadcrumb name="Item">
            <Breadcrumb name="DropdownMenu">
              <Breadcrumb name="DropdownMenuTrigger">
                Components
                <ChevronDownIcon />
              </Breadcrumb>

              <Breadcrumb name="DropdownMenuContent">
                <Breadcrumb name="DropdownMenuGroup">
                  <Breadcrumb name="DropdownMenuItem">Documentation</Breadcrumb>

                  <Breadcrumb name="DropdownMenuItem">Themes</Breadcrumb>

                  <Breadcrumb name="DropdownMenuItem">GitHub</Breadcrumb>
                </Breadcrumb>
              </Breadcrumb>
            </Breadcrumb>
          </Breadcrumb>

          <Breadcrumb name="Separator" />
        </Breadcrumb>
      </Breadcrumb>
    </div>
  </DemoRow>
);

export default BreadcrumbDemo;
