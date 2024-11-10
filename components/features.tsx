import { useEffect, useState } from "react";
import Feature, { FeatureCard } from "./feature";
import { Button } from "./ui/button";
import TextReveal from "./ui/text-reveal";
import styled, { css, keyframes } from "styled-components";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  RabbitIcon,
  XIcon,
} from "lucide-react";
import {
  EyeClosedIcon,
  LockClosedIcon,
  QuestionMarkIcon,
} from "@radix-ui/react-icons";
import ShineBorder from "./ui/shine-border";
import SparklesText from "./ui/sparkles-text";
import Image from "next/image";
import OrbitingCircles from "./ui/orbiting-circles";
import { ny } from "@/libs/utils";

function Checkmark() {
  return (
    <CheckIcon className="mx-auto text-White rounded-full bg-green-500 dark:bg-green-400 p-1 w-7 h-7" />
  );
}

function Cross() {
  return (
    <XIcon className="mx-auto text-white rounded-full bg-red-500 dark:bg-red-400 p-1 w-7 h-7" />
  );
}

function Question() {
  return (
    <QuestionMarkIcon className="mx-auto text-white rounded-full bg-yellow-500 dark:bg-yellow-400 p-1 w-7 h-7" />
  );
}

export default function Features() {
  const [feature, setFeature] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setFeature((feature) => (feature + 1) % 3);
    }, 9000);
  }, []);
  return (
    <div className="relative w-full mb-52 p-5 xl:p-0">
    <div className="w-full md:w-2/3 p-7 md:p-10 xl:p-0 mx-auto grid mt-52 xl:grid-cols-2 relative xl:border-2 xl:rounded-xl xl:shadow-lg hover:border-blue-500 transition-all duration-200 hover:scale-105">
      <div className="flex flex-col xl:p-20 justify-center">
        <h1 className="text-3xl md:text-4xl font-bold">The only limit is your</h1>
        <SparklesText className="!text-3xl md:!text-4xl" text="Imagination" />
        <p className="text-muted-foreground mt-6 lg:mt-8">
          Options right now, try to expand them with us with proper path and profile. Try us today to shape your future!
        </p>
        <p className="text-muted-foreground mt-3">
          We offer a wide range of free webinars, seminars & internships for colleges & their students.
        </p>
        <Button className="mt-auto" onClick={() => window.location.href = "/themes"}>Try it now</Button>
      </div>
      <div className="relative hidden ml-auto xl:flex h-[500px] w-full max-w-xl items-center justify-center overflow-hidden">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-White to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          <Image src="/logos/zen-White.svg" width={100} height={100} alt="Zen Logo" />
        </span>

        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <Image src="/logos/zen-indigo.svg" width={30} height={30} alt="Zen Logo" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <Image src="/logos/zen-alpha-yellow.svg" width={30} height={30} alt="Zen Logo" />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <Image src="/logos/zen-alpha-blue.svg" width={50} height={50} alt="Zen Logo" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <Image src="/logos/zen-pink.svg" width={50} height={50} alt="Zen Logo" />
        </OrbitingCircles>
      </div>
    </div>
      {/*<TextReveal text="Zen will change the way you browse the web. 🌟" />*/}
      <h1 className="text-5xl font-bold mt-56 text-center p-5 md:p-0 flex flex-col md:flex-row justify-center items-center mb-2">What does Zen offer to <SparklesText className="mx-2" text="YOU" />?</h1>
      <p className="text-muted-foreground text-center mx-auto w-3/4 md:w-full p-5 xl:p-0 mb-24">
      Discover how Zen Browser can transform your web experience with powerful features that keep you ahead.
      Here are<br className="hidden md:block"/> some of the features that Zen offers.</p>
      <div className="w-full md:w-2/3 2xl:w-1/2 mx-auto flex flex-col xl:flex-row w-full mt-4 p-5 xl:p-0">
        <div className="w-full flex mx-auto xl:mr-8 flex-col xl:mb-24 xl:ml-4 xl:mt-10">
          <div className="hover:border-blue-500 transition-all duration-100 bg-background relative mx-auto xl:mx-0 flex flex-col max-w-xl justify-center rounded-xl md:border-2 xl:p-20 md:shadow-xl hover:scale-105"> 
            <h1 className="text-5xl font-bold">Split views</h1>
            <p className="text-muted-foreground mt-3">
            Multitask effortlessly by splitting your browser into multiple views, so you can browse several sites at once.
            </p>
            <img src="/split-view.png" className="mt-8 w-full h-full h-auto" />
          </div>
          <div className="hover:border-blue-500 transition-all duration-100 bg-background mx-auto xl:mx-0 relative flex flex-col mt-8 max-w-xl justify-center rounded-xl md:border-2 pt-24 xl:p-20 md:shadow-xl hover:scale-105">
            <h1 className="text-5xl font-bold">Workspaces</h1>
            <p className="text-muted-foreground mt-3">
            Stay organized and clutter-free by creating workspaces tailored to your browsing needs.
            </p>
            <Image
              height={500}
              width={300}
              src="/workspaces.png"
              className="mt-8 w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="hover:border-blue-500 transition-all duration-100 bg-background relative mx-auto xl:mx-0 flex flex-col max-w-xl justify-center rounded-xl md:border-2 xl:p-20 md:shadow-xl hover:scale-105">
            <h1 className="text-5xl font-bold">Profile switching</h1>
            <p className="text-muted-foreground mt-3">
            Seamlessly switch between work and personal profiles for a focused browsing experience.
            </p>
            <Image
              height={500}
              width={300}
              src="/profiles.png"
              className="mt-8 w-full h-full"
              alt=""
            />
          </div>
          <div className="hover:border-blue-500 transition-all duration-100 bg-background relative mx-auto xl:mx-0 flex flex-col max-w-xl justify-center rounded-xl md:border-2 xl:p-20 md:shadow-xl hover:scale-105 mt-8">
            <h1 className="text-5xl font-bold">Side web panels</h1>
            <p className="text-muted-foreground mt-3">
            Access favorite sites and services instantly, without leaving your current page.
            </p>
            <Image
              height={500}
              width={300}
              src="/sidebar.png"
              className="mt-8 w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto justify-center w-full xl:w-2/3 my-80">
        <div className="relative w-full flex items-center">
          <div className={ny("flex flex-col xl:flex-row w-full mt-4 p-5 justify-between items-center w-fit transition-all duration-500 absolute", feature === 0 ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0")}>
            <div className="flex flex-col max-w-xl text-center md:text-start">
              <h1 className="text-5xl xl:text-5xl font-bold flex flex-col lg:flex-row">Built for
                <SparklesText className="!text-5xl xl:!text-5xl lg:ml-3" text="speed" />
              </h1>
              <p className="text-muted-foreground mt-3">
              Zen is engineered for speed, consistently outperforming competitors with every release, ensuring a faster browsing experience.
              </p>
              <Button className="mt-8 w-fit mx-auto xl:mx-0" onClick={() => window.location.href = "/download"}>Download Zen Browser</Button>
            </div>
          </div>
          <div className={ny("flex flex-col xl:flex-row w-full mt-4 p-5 justify-between items-center w-fit transition-all duration-500 absolute", feature === 1 ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0")}>
            <div className="flex flex-col max-w-xl text-center md:text-start">
              <h1 className="text-5xl xl:text-5xl font-bold flex flex-col lg:flex-row">Privacy is
                <SparklesText className="!text-5xl xl:!text-5xl lg:ml-3" text="key" />
              </h1>
              <p className="text-muted-foreground mt-3">
              Zen strikes the perfect balance between privacy and usability, allowing you to browse without compromising your data.
              </p>
              <Button className="mt-8 w-fit mx-auto xl:mx-0" onClick={() => window.location.href = "/download"}>Download Zen Browser</Button>
            </div>
          </div>
          <div className={ny("flex flex-col xl:flex-row w-full mt-4 p-5 justify-between items-center w-fit transition-all duration-500 absolute", feature === 2 ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0")}>
            <div className="flex flex-col text-center md:text-start max-w-xl">
              <h1 className="text-5xl xl:text-5xl font-bold flex flex-col lg:flex-row">Security is
                <SparklesText className="text-5xl xl:!text-5xl lg:ml-3" text="important" />
              </h1>
              <p className="text-muted-foreground mt-3">
              Zen incorporates advanced security technologies that outshine other Firefox-based browsers, keeping you safe online.
              </p>
              <Button className="mt-8 mx-auto xl:mx-0 w-fit" onClick={() => window.location.href = "/download"}>Download Zen Browser</Button>
            </div>
          </div>
        </div>
        <Image
          height={1000}
          width={800}
          src="/color-preview.png"
          className="rounded-xl mt-64 xl:mt-0 xl:ml-52 border-2 border-blue-500 shadow-xl xl:scale-[1.3] hover:scale-105 xl:hover:scale-[1.4] transition-all duration-200"
          alt=""
        />
      </div>
      
      <div className="mt-48 w-full flex items-center justify-center flex-col">
        <h1 className="text-5xl text-center font-bold w-1/2">Want more?</h1>
        <p className="text-muted-foreground text-center mt-3 w-1/2">
        Zen Browser is packed with features designed to revolutionize your browsing.
          Download it today and experience a new way to explore the web.
        </p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10">
          <FeatureCard title="Beautifully designed"
              description="Zen offers an intuitive, aesthetically pleasing interface that’s easy to navigate." />
          <FeatureCard title="Customizable"
              description="Personalize Zen to match your preferences with themes, layouts, and more." />
          <FeatureCard title="Keyboard shortcuts"
              description="Boost your productivity with keyboard shortcuts tailored for efficiency." />
          <FeatureCard title="Your browser, your way"
              description="Zen adapts to your needs, offering a browsing experience as unique as you." />
          <FeatureCard title="Tab groups"
              description="Keep your browsing organized with tab groups that streamline your workflow."
              todo />
          <FeatureCard title="Vertical tabs"
              description="Maximize space and order with vertical tabs, designed for easy access." />
        </div>
        <Link href="/download">
        <Button className="mt-8">Download Zen Browser</Button>
        </Link>
      </div>
    </div>
  );
}
