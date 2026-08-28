"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import ScrollToLeadButton from "@/components/ScrollToLeadButton"

type StayItem = {
  title: string
  description: string
  image: string
  button: string
  features: string[]
}

type StayCardsCarouselProps = {
  stays: StayItem[]
}

export default function StayCardsCarousel({ stays }: StayCardsCarouselProps) {
  const [allCardsExpanded, setAllCardsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const expandAllCards = () => {
    setAllCardsExpanded(true)
  }

  const showExpandedStayCards = allCardsExpanded || !isMobile

  return (
    <div className="relative px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {stays.map((item) => {
            return (
              <CarouselItem
                key={item.title}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col bg-white">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Image */}
                    <div
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer md:cursor-default"
                      onClick={() => isMobile && expandAllCards()}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col h-full transition-all duration-300 ${
                        showExpandedStayCards ? "p-8" : "p-4 justify-center"
                      }`}
                    >
                      <h3 className="font-headline text-2xl font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      {showExpandedStayCards ? (
                        <>
                          <p className="mt-4 text-slate-900 leading-7 italic">
                            {item.description}
                          </p>

                          {/* Features */}
                          <ul className="mt-6 space-y-3">
                            {item.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-slate-900">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Button */}
                          <div className="mt-auto pt-6">
                            <ScrollToLeadButton className="w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white hover:bg-primary/90">
                              {item.button}
                            </ScrollToLeadButton>
                          </div>
                        </>
                      ) : (
                        <button
                          onClick={() => expandAllCards()}
                          aria-expanded={showExpandedStayCards}
                          className="mt-4 text-primary font-semibold hover:text-primary/80 text-left"
                        >
                          Read More →
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Carousel Controls */}
        <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white shadow-md" />
        <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white shadow-md" />
      </Carousel>
    </div>
  )
}

