"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Growtechie from "@/public/LogoAlone.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserButton } from "@/app/_features/auth/components/user-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Calendar, Sliders, Book, HelpCircle } from "lucide-react";
import '../app/globals.css';
import { useConvexAuth } from "convex/react";

const courses = [
  { title: "UI/UX Design", image: "/UIUXCover.jpg", link: "/courses/ui_uix" },
  { title: "Data Science", image: "/DataScienceCover.jpg", link: "/courses/data_science" },
  { title: "Programming", image: "/ProgrammingCover.jpg", link: "/courses/python_fundamentals" },
  { title: "Cyber Security", image: "/CyberSecurityCover.jpg", link: "/courses/cyber_security" },
  { title: "React", image: "/ReactCover.jpg", link: "/courses/react_fundamentals" },
  { title: "SQL Masterclass", image: "/SQLCover.jpg", link: "/courses/sql" },
  { title: "AI Engineering", image: "/AIEngineeringCover.jpg", link: "/courses/ai_engineer" },
  { title: "Data Analytics", image: "/DataAnalyticsCover.jpg", link: "/courses/data-analytics" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, isLoading } = useConvexAuth();

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    },500)
  };

  return (
    <>
      <div className="marquee bg-white text-center">
        <Link href="/courses" className="hover:underline">
          Get 20% OFF in every course. Register today for your interested course and enjoy learning.
        </Link>
      </div>
      <header className="sticky top-0 z-50 pb-2 bg-black/60 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="bg-white text-black hover:bg-gray-200 rounded-full p-1">
                <Link href="/" onClick={closeMenu}>
                  <Image
                    src={Growtechie}
                    alt="Growtechie Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </Link>
              </div>
              <Link href="/" onClick={closeMenu}>
                <span className="text-lg sm:text-xl font-light text-white">
                  Growtechie
                </span>
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              {!isLoading && isAuthenticated && <UserButton />}
              <button
                className="ml-2 text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-between ml-2 items-center">
                  <span className={`bg-white h-0.5 w-6 transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`bg-white h-0.5 w-6 transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`bg-white h-0.5 w-6 transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                </div>
              </button>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex flex-1 justify-center items-center">
              <NavigationMenu className="text-white">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center space-x-2">
                        <span>Catalog</span>
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr] text-black bg-white backdrop-blur-lg">
                        <ListItem href="/teachers" title="Mentors" className="hover:bg-accent hover:text-accent-foreground" description="Meet our experienced mentors" />
                        <ListItem href="/courses" title="Courses" className="hover:bg-accent hover:text-accent-foreground" description="Explore our course offerings" />
                        <ListItem href="/e-building" title="E-Building" className="hover:bg-accent hover:text-accent-foreground " description="Visit our virtual learning space" />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center space-x-2">
                        <span>Resources</span>
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-black bg-white backdrop-blur-lg">
                        {courses.map((course) => (
                          <ListItem
                            key={course.title}
                            title={course.title}
                            href={course.link}
                            className="hover:bg-accent hover:text-accent-foreground"
                            description="Expand your knowledge"
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className="flex items-center space-x-2">
                        <span>Find More</span>
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr] text-black bg-white backdrop-blur-lg">
                        <ListItem href="/about" title="About" className="hover:bg-accent hover:text-accent-foreground" description="Learn more about us" />
                        <ListItem href="/contact" title="Contact" className="hover:bg-accent hover:text-accent-foreground" description="Get in touch with us" />
                        <ListItem href="/blog" title="Blog" className="hover:bg-accent hover:text-accent-foreground" description="Read our latest articles" />
                        <ListItem href="/testimonial" title="Testimonial" className="hover:bg-accent hover:text-accent-foreground" description="See what our students say" />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              {!isLoading && (
                <>
                  {!isAuthenticated ? (
                    <Link href="/register">
                      <Button variant="outline" className="text-sm text-white">
                        Sign In / Sign Up
                      </Button>
                    </Link>
                  ) : (
                    <UserButton />
                  )}
                </>
              )}

              <a
                href="https://calendly.com/growtechie-ind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-black hover:bg-gray-200 text-sm">
                  <Sliders size={20} className="mr-2" />
                  Book Demo Session
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden ${
              isMenuOpen ? "block" : "hidden"
            } bg-black/60 backdrop-blur-lg p-4 mt-4 pb-4 rounded-lg border border-white/10`}
          >
            <Link href="/about" className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded transition-colors duration-200" onClick={closeMenu}>
              About
            </Link>
            <Link href="/contact" className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded transition-colors duration-200" onClick={closeMenu}>
              Contact
            </Link>
            <Link href="/testimonial" className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded transition-colors duration-200" onClick={closeMenu}>
              Testimonial
            </Link>
            <Link href="/blog" className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded transition-colors duration-200" onClick={closeMenu}>
              Blogs
            </Link>
            <Link href="/courses" className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded transition-colors duration-200" onClick={closeMenu}>
              Courses
            </Link>
            <Link href="/e-building" className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded transition-colors duration-200" onClick={closeMenu}>
              E-Building
            </Link>
            <Link href="/teachers" className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded transition-colors duration-200" onClick={closeMenu}>
              Teachers
            </Link>
            {!isLoading && !isAuthenticated && (
              <Link href="/register" className="block text-sm text-gray-300  hover:bg-white hover:text-black  py-2 px-3 rounded transition-colors duration-200" onClick={closeMenu}>
                Sign In / Sign Up
              </Link>
            )}
            <a
              href="https://calendly.com/growtechie-ind"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-300 hover:text-white hover:bg-white/10 py-2 px-3 rounded transition-colors duration-200"
              onClick={closeMenu}
            >
              Book Demo Session
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { description?: string }
>(({ className, title, description, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
          {description && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;