"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sideBarNavRoutes } from "./nav-route";
import Link from "next/link";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "../Icons";

export function NavigationMenu() {
  const pathName = usePathname();
  const route = useRouter();
  return (
    <div
      className={cn(
        "w-full max-w-[280px] flex-shrink-0 px-6 py-4  bg-[#289992] relative"
      )}
    >
      <div className="flex justify-between items-center mb-5 border-b border-dashed pb-[14px]">
        <span>
          <Icons.hrcWhiteLogo />
        </span>
        <span>
          <Icons.menuBack />
        </span>
      </div>

      {sideBarNavRoutes.map((nav, index) => {
        return (
          <Accordion
            asChild
            key={index}
            type="single"
            collapsible
            className="w-full border-b-0"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[16px] cursor-pointer font-semibold text-white !no-underline !p-2">
                <div
                  onClick={() => {
                    !nav.subNavigation.length ? route.push(nav.href) : null;
                  }}
                  className="flex gap-[6px] items-center"
                >
                  <span>{nav?.icon}</span>
                  <span>{nav?.title}</span>
                </div>
              </AccordionTrigger>
              {nav.subNavigation.length > 0 && (
                <AccordionContent className="text-white">
                  <ul className=" flex flex-col gap-1">
                    {nav.subNavigation.map(({ title, href }, index) => {
                      return (
                        <Link key={index} href={href}>
                          <li
                            className={classNames(
                              "text-[16px] font-medium py-[10px] px-[32px] rounded-sm hover:bg-white hover:text-[#27988D]",
                              {
                                "bg-white text-[#27988D]": href === pathName,
                              }
                            )}
                          >
                            {title}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </AccordionContent>
              )}
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}
