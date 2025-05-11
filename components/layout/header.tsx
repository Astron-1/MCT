"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Heart } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Trust Org</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/"}>
                  <Link href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our mission, vision, and values
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/team"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Our Team</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Meet the dedicated individuals behind our organization
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/programs"}>
                  <Link href="/programs" className={navigationMenuTriggerStyle()}>
                    Programs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname.startsWith("/blog")}>
                  <Link href="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/gallery"}>
                  <Link href="/gallery" className={navigationMenuTriggerStyle()}>
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/news"}>
                  <Link href="/news" className={navigationMenuTriggerStyle()}>
                    News
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === "/contact"}>
                  <Link href="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <Button asChild className="hidden md:inline-flex" variant="default">
              <Link href="/donate">Donate Now</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" onClick={closeSheet}>
                    <Button className="w-full justify-start" variant="ghost">Home</Button>
                  </Link>
                  <Link href="/about" onClick={closeSheet}>
                    <Button className="w-full justify-start" variant="ghost">About Us</Button>
                  </Link>
                  <Link href="/team" onClick={closeSheet}>
                    <Button className="w-full justify-start" variant="ghost">Our Team</Button>
                  </Link>
                  <Link href="/programs" onClick={closeSheet}>
                    <Button className="w-full justify-start" variant="ghost">Programs</Button>
                  </Link>
                  <Link href="/blog" onClick={closeSheet}>
                    <Button className="w-full justify-start" variant="ghost">Blog</Button>
                  </Link>
                  <Link href="/gallery" onClick={closeSheet}>
                    <Button className="w-full justify-start" variant="ghost">Gallery</Button>
                  </Link>
                  <Link href="/news" onClick={closeSheet}>
                    <Button className="w-full justify-start" variant="ghost">News</Button>
                  </Link>
                  <Link href="/contact" onClick={closeSheet}>
                    <Button className="w-full justify-start" variant="ghost">Contact</Button>
                  </Link>
                  <Link href="/donate" onClick={closeSheet}>
                    <Button className="w-full">Donate Now</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}