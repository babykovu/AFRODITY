"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-28">
              <Image
                src="/images/logo.png"
                alt="AFRODITY Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#artists"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            For Artists
          </Link>
          <Link href="#signup">
            <Button>Sign Up</Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="#features"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#artists"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                For Artists
              </Link>
              <Link href="#signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
