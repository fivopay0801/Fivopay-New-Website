"use client";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Menu, XIcon } from "lucide-react";

import React from "react";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "@/assets/Fivopay.png";

const pages = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Products",
    href: "/product"
  },
  {
    name: "Pricing",
    href: "/pricing"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full md:top-6 top-4 mx-auto absolute z-40 px-4">
      <Container className="flex justify-between items-center bg-gradient-to-r from-white via-slate-100/95 to-slate-200/90 backdrop-blur-xl border border-white/80 rounded-full py-2.5 px-6 md:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
        <Link to="/" className="flex items-center space-x-2 w-fit shrink-0">
          <img src={logo} alt="FivoPay" className="h-20 md:h-[84px] w-auto object-contain py-1 transition-transform hover:scale-105" />
        </Link>

        {/* <!-- Mobile --> */}
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden text-slate-900 h-11 w-11 flex items-center justify-center">
                <Menu
                  className="w-6 h-6"
                  aria-hidden="true"
                />
              </button>
            </SheetTrigger>

            <SheetContent
              className="flex flex-col justify-between bg-black border-border"
            >
              <div className="h-full flex flex-col">
                <SheetHeader className="flex flex-row justify-between border-b border-foreground">
                  <SheetTitle className="flex items-center">
                    <Link to="/" className="flex items-center bg-white/90 px-3 py-1 rounded-xl" onClick={() => setIsOpen(false)}>
                      <img src={logo} alt="FivoPay" className="h-9 w-auto object-contain" />
                    </Link>
                  </SheetTitle>
                  <div className="flex items-center gap-2">
                    <SheetPrimitive.Close
                      className="h-11 w-11 flex items-center justify-center data-[state=open]:bg-white right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none">
                      <XIcon className="size-5 text-white" />
                      <span className="sr-only">Close</span>
                    </SheetPrimitive.Close>
                  </div>
                </SheetHeader>
                <div className="px-3 py-6 flex flex-col h-full justify-between flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-1">
                    {pages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-2 text-lg text-white/90 hover:text-primary font-semibold transition-colors border-b border-white/10"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block mx-auto flex-1">
          <NavigationMenuList className="gap-2 xl:gap-3">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-4 py-2 text-[17px] md:text-[18px] font-semibold text-slate-800 hover:text-primary transition-colors">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/product" className="px-4 py-2 text-[17px] md:text-[18px] font-semibold text-slate-800 hover:text-primary transition-colors">
                  Products
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="px-4 py-2 text-[17px] md:text-[18px] font-semibold text-slate-800 hover:text-primary transition-colors">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/pricing" className="px-4 py-2 text-[17px] md:text-[18px] font-semibold text-slate-800 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="px-4 py-2 text-[17px] md:text-[18px] font-semibold text-slate-800 hover:text-primary transition-colors">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex gap-2 items-center w-fit shrink-0 justify-end">
          <Button
            asChild
            className="relative overflow-hidden group bg-gradient-to-b from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-850 text-white font-medium text-[16px] px-6 py-2.5 h-auto rounded-full border-t border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)] active:translate-y-[1px] active:shadow-[0_1px_3px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
