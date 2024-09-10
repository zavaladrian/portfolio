"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
import Image from "next/image";

const ProjectSlider = () => {
  return (
    <>
      <Carousel
        // plugins={[
        //   Autoplay({
        //     delay: 5000,
        //   }),
        // ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className=" grid grid-rows-1 tablet:grid-cols-2 md:p-10 gap-2">
              <p className="text-black text-xl laptop:text-3xl text-balance font-serif font-semibold">
                While I was enrolled in Nucamp Bootcamp, we were expected to do
                projects along with the learning and I wanted showcase some of
                them.
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="text-xl">Nucamp Site</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-xl">
                      We built a site that included multiple pages with listed
                      campsites along with reviews from fake users off a json
                      server database that we also built. The site also included
                      a log in feature that also registered and stored new users
                      to the database, including new reviews to campsites.
                    </p>
                    <p className="text-base mt-2">
                      <span className="font-extrabold"> Libraries:</span> React,
                      Bootstrap
                    </p>

                    <Link
                      href="https://github.com/zavaladrian/nucampsite"
                      target="_blank"
                      rel="nofollow"
                    >
                      <AiFillGithub
                        size="2.4rem"
                        className="opacity-50  hover:text-rose-700 hover:opacity-100 mx-auto mt-2 "
                      />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <p className="text-xl">Nucamp Mobile Site</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-xl">
                      We built the same campsite site from earlier react course
                      and created a mobile site for it.{" "}
                    </p>
                    <p className="text-base mt-2">
                      <span className="font-extrabold"> Libraries:</span> React
                      Native, Bootstrap, and Expo SDK.
                    </p>

                    <Link
                      href="https://github.com/zavaladrian/reactnative"
                      target="_blank"
                      rel="nofollow"
                    >
                      <AiFillGithub
                        size="2.4rem"
                        className="opacity-50  hover:text-rose-700 hover:opacity-100 mx-auto mt-2 "
                      />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <p className="text-xl">Nucamp Server</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-xl">
                    We built a backend server to store data and integrate with
                    our website. We learned how to authenticate users and some
                    fundamentals of cybersecurity. Was introduced to Postman
                    which allowed us to do some backend testing and in general,
                    with building and using APIs.
                    </p>
                    <p className="text-base mt-2">
                      <span className="font-extrabold"> Libraries:</span>{" "}
                      Express, MongoDB, Nodejs, Cors, Passport, Cookie-Parser
                    </p>
                    <Link
                      href="https://github.com/zavaladrian/nucampserver"
                      target="_blank"
                      rel="nofollow"
                    >
                      <AiFillGithub
                        size="2.4rem"
                        className="opacity-50  hover:text-rose-700 hover:opacity-100 mx-auto mt-2 "
                      />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" grid grid-rows-1 tablet:grid-cols-2 md:p-10 gap-2">
              <div>
                <h1 className="text-3xl text-black laptop:text-glacier font-bold">
                  Nucamp Honors Project
                </h1>
                <p className="text-black laptop:text-2xl font-semibold mt-5">
                  A Nucamp Honors Project that was optional towards the end of
                  the course and using the knowledge from Nucamp provided. This
                  site featured anime shows with descriptions and a filtered
                  system. There was a watchlist on a separate page which you
                  were able to add from the list provided on the homepage or
                  enter your own with a form provided on the watchlist. Also had
                  a login and member feature.
                </p>
                <p className="text-xl mt-5 font-semibold">
                  <span className="font-extrabold"> Libraries:</span> React,
                  Tailwind, Framer Motion, Axios, Formik, Firebase
                </p>
                <Link
                  href="https://github.com/zavaladrian/anime-watchlist"
                  target="_blank"
                  rel="nofollow"
                >
                  <AiFillGithub
                    size="2.4rem"
                    className="opacity-50 hover:text-rose-700 hover:opacity-100 mx-auto m-5 "
                  />
                </Link>
              </div>
              <Image
                height={1000}
                width={1000}
                alt="Anime Watchlist"
                src="/watchlist.png"
                className="rounded-xl"
              />
              <div></div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" grid grid-rows-1 tablet:grid-cols-2 md:p-10 gap-2">
              <div className="text-pretty">
                <h1 className="text-3xl text-black laptop:text-glacier font-bold">
                  El Faro Website
                </h1>
                <p className="text-black text-2xl font-semibold mt-5">
                  Given my background in a family-owned restaurant business, I
                  took the initiative to develop and design a website aimed at
                  showcasing our menu offerings.
                </p>
                <p className="mt-5 text-xl font-semibold">
                  <span className="font-extrabold"> Libraries:</span> React,
                  NextJs, Tailwind, Framer Motion
                </p>
                <div className="flex justify-center mt-6">
                  <Link
                    href="https://www.elfaros.com"
                    target="_blank"
                    rel="nofollow"
                  >
                    <button className="bg-glacier rounded-2xl p-3 text-rblue hover:bg-mblue hover:text-white ">
                      <p className="text-2xl font-semibold">
                        {" "}
                        El Faro Website
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative ">
                <Image
                  height={500}
                  width={500}
                  alt="el faro website"
                  src="/aelfaro.png"
                  className="rounded-md pt-5 tablet:pt-0"
                />
                <Image
                  height={100}
                  width={100}
                  alt="el faro mobile site"
                  src="/afarophone.png"
                  priority={true}
                  className="border-2 border-black rounded-2xl mx-auto tablet:my-auto absolute laptop:bottom-2 top-20 laptop:top-0 invisible tablet:visible"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" grid grid-rows-1 tablet:grid-cols-2 md:p-10 gap-2">
              <div className="text-pretty">
                <h1 className="text-3xl text-black laptop:text-glacier font-bold">
                  2K-Detail Website
                </h1>
                <p className="text-black text-2xl font-semibold mt-5">
                  My friends decided to start a company and I offered my
                  services to build a better site they originally built from
                  Squared Space AI.
                </p>
                <p className="text-xl mt-5 font-semibold">
                  <span className="font-extrabold"> Libraries:</span> React,
                  NextJs, Tailwind, Framer Motion, Emailjs
                </p>
                <div className="flex justify-center mt-6">
                  <Link
                    href="https://carwash-brown.vercel.app/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <button className="bg-glacier rounded-2xl p-3 text-rblue hover:bg-mblue hover:text-white ">
                      <p className="text-2xl font-semibold">
                        {" "}
                        Car Detail Website
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  height={550}
                  width={550}
                  alt="car detail website"
                  src="/cardetail.png"
                  className="rounded-md pt-5 tablet:pt-0"
                />
                <Image
                  height={100}
                  width={100}
                  alt="car detail mobile"
                  src="/carmobile.png"
                  className="border-2 border-black rounded-2xl mx-auto tablet:my-auto absolute laptop:bottom-2 top-20 laptop:top-0 invisible tablet:visible "
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ProjectSlider;
