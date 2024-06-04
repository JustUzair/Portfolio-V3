"use client";

import Image from "next/image";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { audits, projects } from "@/data";
import Link from "next/link";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa6";
import { Button } from "./ui/MovingBorders";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function ProjectTabs() {
  return (
    <Tabs defaultValue="all" className="mt-10">
      <TabsList className="lg:grid w-full lg:grid-cols-5 flex flex-wrap justify-center items-center">
        <TabsTrigger className="px-5 py-3 " value="all">
          All
        </TabsTrigger>
        <TabsTrigger className="px-5 py-3 " value="audits">
          Audits
        </TabsTrigger>
        <TabsTrigger className="px-5 py-3 " value="smart-contracts">
          Smart-Contracts
        </TabsTrigger>
        <TabsTrigger className="px-5 py-3 " value="web3-fullstack">
          Web3
        </TabsTrigger>
        <TabsTrigger className="px-5 py-3 " value="web2">
          Web2
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="all"
        className="flex flex-wrap items-center justify-center p-4 gap-16 mt-0"
      >
        <Projects filterBy="all" />
      </TabsContent>
      <TabsContent
        className="flex flex-wrap items-center justify-center p-4 gap-16 mt-0"
        value="audits"
      >
        <Audits filterBy="all" />
      </TabsContent>
      <TabsContent
        className="flex flex-wrap items-center justify-center p-4 gap-16 mt-0"
        value="smart-contracts"
      >
        <Projects filterBy="smart-contracts" />
      </TabsContent>
      <TabsContent
        className="flex flex-wrap items-center justify-center p-4 gap-16 mt-0"
        value="web3-fullstack"
      >
        <Projects filterBy="web3-fullstack" />
      </TabsContent>
      <TabsContent
        className="flex flex-wrap items-center justify-center p-4 gap-16 mt-0"
        value="web2"
      >
        <Projects filterBy="web2" />
      </TabsContent>
    </Tabs>
  );
}

const Projects = ({ filterBy }: { filterBy: string }) => {
  return (
    <>
      {projects.map((item: any) => {
        // console.log(`category ${filterBy}`, item.category.includes(filterBy));
        // console.log(item.deployed_url);

        if (item.category.includes(filterBy) || filterBy === "all")
          return (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <Link href={item.link} target="_blank">
                <PinContainer title={item.link} href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-[100%] h-[100%] overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <Image
                        width={"100"}
                        height={"100"}
                        src="/bg.png"
                        alt="bgImage"
                        className="width-[100%] height-[100%]"
                      />
                    </div>
                    <Image
                      width={"100"}
                      height={"100"}
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute left-0 top-0 right-0 bottom-0 object-contain"
                      unoptimized
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    {item.isHackathonWinner && (
                      <div className="absolute  z-[9999] bg-zinc-50 rounded-full top-[2%] right-[2%] w-10 h-10">
                        <Image
                          width={"100"}
                          height={"100"}
                          src={"/prize.svg"}
                          alt="hackathon-winner"
                          className="p-2 object-cover width-[100%] height-[100%]"
                        />
                      </div>
                    )}
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon: any, index: any) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            width={"100"}
                            height={"100"}
                            src={icon}
                            alt="icon5"
                            className="p-2 width-[100%] height-[100%]"
                          />
                        </div>
                      ))}
                    </div>

                    <Link href={item.deployed_url || item.link} target="_blank">
                      <p className="flex justify-center px-2 py-3 rounded-xl items-center lg:text-xl md:text-xs text-sm bg-[#CBACF9] text-zinc-950  hover:text-[#CBACF9] hover:bg-zinc-950 transition-all">
                        Live Project
                        <FaLocationArrow className="ml-1 text-zinc-950 hover:text-[#CBACF9]" />
                      </p>
                    </Link>
                  </div>
                </PinContainer>
              </Link>
            </div>
          );
      })}
    </>
  );
};

const Audits = ({ filterBy }: { filterBy: string }) => {
  return (
    <>
      {audits.map((item: any) => {
        // console.log(`category ${filterBy}`, item.category.includes(filterBy));

        if (item.platform.includes(filterBy) || filterBy === "all")
          return (
            <Link
              href={item.pdfFile}
              target="_blank"
              type="application/pdf"
              key={item.id}
            >
              <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                <PinContainer title={"View Audit Report"} href={item.pdfFile}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-[100%] h-[100%] overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <Image
                        width={"100"}
                        height={"100"}
                        src="/bg.png"
                        alt="bgImage"
                        className="width-[100%] height-[100%]"
                      />
                    </div>
                    <Image
                      width={"100"}
                      height={"100"}
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute left-0 top-0 right-0 bottom-0 object-contain"
                      unoptimized
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  <h1 className=" lg:text-2xl md:text-xl text-base line-clamp-1  font-light">
                    {/* {item.platform} : */}
                    <span className="tracking-widest font-bold">
                      Audit : {item.name}
                    </span>
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.date.toLocaleString("en-GB", {
                      timeZone: "IST",
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon: any, index: any) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            width={"100"}
                            height={"100"}
                            src={icon}
                            alt="icon5"
                            className="p-2 width-[100%] height-[100%]"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Audit Report
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </Link>
          );
      })}
    </>
  );
};
