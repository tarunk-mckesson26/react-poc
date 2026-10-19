import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ChevronDownIcon } from "lucide-react";
import DemoRow from "./demoRow";

const BreadcrumbDemo = () => (
  <DemoRow>
    <div className="w-full min-w-0 overflow-x-auto">
      <h3 className="px-4 py-3 text-base font-semibold">Breadcrumb Items</h3>
      <table
        className="w-full table-fixed border-collapse text-left text-sm"
        aria-label="Breadcrumb parts"
      >
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="w-1/2 px-4 py-3 font-semibold">
              Part
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Example
            </th>
          </tr>
        </thead>
        <tbody>
          {(["List", "Ellipsis", "DropdownMenuTrigger", "Page"] as const).map(
            (part) => (
              <tr key={part} className="border-b border-border">
                <th scope="row" className="wrap-anywhere px-4 py-4 font-medium">
                  {part}
                </th>
                <td className="px-4 py-4">
                  <Breadcrumb>
                    <Breadcrumb name="List">
                      <Breadcrumb name="Item">
                        {part === "List" ? (
                          <Breadcrumb name="Link" href="#">
                            Breadcrumb
                          </Breadcrumb>
                        ) : part === "Page" ? (
                          <Breadcrumb name="Page">Breadcrumb</Breadcrumb>
                        ) : (
                          <Breadcrumb name="DropdownMenu">
                            <Breadcrumb
                              name="DropdownMenuTrigger"
                              aria-label={
                                part === "Ellipsis" ? "Toggle menu" : undefined
                              }
                            >
                              {part === "Ellipsis" ? (
                                <Breadcrumb name="Ellipsis" />
                              ) : (
                                <>
                                  Breadcrumb
                                  <ChevronDownIcon />
                                </>
                              )}
                            </Breadcrumb>
                            <Breadcrumb name="DropdownMenuContent">
                              <Breadcrumb name="DropdownMenuGroup">
                                <Breadcrumb name="DropdownMenuItem">
                                  Documentation
                                </Breadcrumb>
                                <Breadcrumb name="DropdownMenuItem">
                                  Themes
                                </Breadcrumb>
                                <Breadcrumb name="DropdownMenuItem">
                                  GitHub
                                </Breadcrumb>
                              </Breadcrumb>
                            </Breadcrumb>
                          </Breadcrumb>
                        )}
                      </Breadcrumb>
                    </Breadcrumb>
                  </Breadcrumb>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
    <div className="w-full min-w-0 px-4 py-4">
      <h3 className="mb-4 text-base font-semibold">Breadcrumb</h3>
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

          <Breadcrumb name="Item">
            <Breadcrumb name="DropdownMenu">
              <Breadcrumb name="DropdownMenuTrigger">
                Breadcrumb
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

          <Breadcrumb name="Item">
            <Breadcrumb name="Page">Breadcrumb</Breadcrumb>
          </Breadcrumb>
        </Breadcrumb>
      </Breadcrumb>
    </div>
  </DemoRow>
);

export default BreadcrumbDemo;
