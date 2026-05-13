import Image from "next/image";
import { ArrowRight, BadgeDollarSignIcon, GraduationCap, Hammer, Layout, Lightbulb, Megaphone, PanelsTopLeft, ShieldCheck, ShoppingBag, Signpost, Sofa, Sparkle, SparkleIcon, Star, Store, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import ScrollToLeadButton from "@/components/ScrollToLeadButton";
import SectionHeader from "@/components/SectionHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Build from "next/dist/build";

const LOGO_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778668639/advlogo_qq9f92.png";
const HERO_BG_URL = "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1774679097/P1510960_1_1_1_wrknkg.jpg";
const DEFAULT_PLACEHOLDER = "https://picsum.photos/seed/placeholder/800/600";

export default function LandingPage() {
  const studentImg = PlaceHolderImages.find((img) => img.id === "student-work");
  const brandingImg = PlaceHolderImages.find((img) => img.id === "branding-mockup");
  const deferredSectionStyle = {
    contentVisibility: "auto",
    containIntrinsicSize: "900px",
  } as const

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <nav className="fixed top-0 z-50 w-full overflow-x-hidden border-b bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2" aria-label="INSD Logo">
            <Image
              src={LOGO_URL}
              alt="INSD Logo"
              width={200}
              height={50}
              className="h-10 w-auto object-contain"
              priority
              quality={60}
            />
          </div>
          <div className="flex items-center gap-4">
            <ScrollToLeadButton
              variant="ghost"
              className="hidden font-semibold text-primary md:inline-flex"
            >
              ENQUIRE NOW!
            </ScrollToLeadButton>
            <ScrollToLeadButton className="bg-secondary px-6 font-bold text-white hover:bg-secondary/90">
              Apply Now
            </ScrollToLeadButton>
          </div>
        </div>
      </nav>

      <main className="w-full pb-24 pt-20 lg:pb-0">
        <section className="relative w-full overflow-hidden bg-primary py-20 lg:py-20">
          <div className="absolute inset-0">
            <Image
              src={HERO_BG_URL}
              alt="Design Workspace"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              quality={60}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              data-ai-hint="graphic design workspace"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
          <div className="container relative z-10 mx-auto max-w-7xl px-4">
            <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="w-full space-y-6 text-white">
                {/* <Badge className="mb-4 border-none bg-secondary px-4 py-1 text-sm text-white shadow-[0_0_18px_rgba(219,52,54,0.55)] animate-pulse">
                  Admissions Open 2026-27
                </Badge> */}
                <h1 className="font-headline text-3xl leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] md:text-5xl">
                  We Don't Just Design Stores. <br /> We Build Brands Inside Them.
                </h1>
                <p className="max-w-xl text-xl text-white">
                  Join hands with AD Vantage Marketing and get retail branding strategies that make your customers choose you, every single time they walk in.
                </p>
                <div className="flex max-w-2xl flex-wrap gap-2">
                  {[
                    "Top Retail Branding Agency in India",
                    "In-Shop Branding Specialists",
                    "Store Layout & Space Design Experts",
                    "Pan-India Presence",
                    "End-to-End Retail Execution",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                    >
                      <Star className="h-3.5 w-3.5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex max-w-2xl flex-wrap gap-3">
                  {[
                    "Retail Experience Design",
                    "Visual Merchandising ",
                    "Materials & Fabrications",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(219,52,54,0.35)]"
                    >
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg italic text-secondary">
                  ENQUIRE NOW!
                </p>
              </div>
              <div id="lead-form-top">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-20" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={studentImg?.imageUrl || DEFAULT_PLACEHOLDER}
                  alt="Student at Work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-ai-hint="designer working"
                />
              </div>
              <div className="space-y-6">
                <SectionHeader
                  title="Strategy. Creativity. Execution. Come First."
                  subtitle={
                <>
                  At AD Vantage, we focus on what truly drives brand growth — visibility, experience, and consumer connection.{" "}
                </>
            }
                centered={false}
                />

                <ul className="space-y-4">
                  {[
                    "Strategy over guesswork",
                    "Visibility over assumptions",
                    "Consumer experience over generic campaigns",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium text-primary">
                      <ShieldCheck className="h-6 w-6 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-block border-b-2 border-secondary pb-1 text-lg font-bold text-primary">
                  We build brand presence, not just advertisements.
                </p>
                <p className="mt-2 text-lg leading-relaxed text-primary">
                  From day one, every solution we craft is focused on making your brand unmissable and your customer's experience unforgettable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted py-20" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <SectionHeader
                  title="Your Market Is Growing. Is Your Brand Keeping Up?"
                  subtitle="India's retail and digital landscape is expanding faster than ever."
                  centered={false}
                />
                <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground marker:text-secondary">
                  <li>
                    <span className="text-slate-600">
                      India's consumer market is one of the fastest-growing in the world
                    </span>
                  </li>

                  <li>
                    <span className="text-slate-600">
                      Brands that invest in consistent retail visibility consistently outperform those that don't
                    </span>
                  </li>

                  <li>
                    <span className="text-slate-600">
                      In-store experience and retail branding are among the top drivers of purchase decisions
                    </span>
                  </li>
                </ul>
                <p className="mt-4 inline-block border-b-2 border-secondary pb-1 text-lg font-bold text-primary">Retail Presence = Business Growth</p>
                <p className="text-lg text-muted-foreground">With the right retail branding strategy, your brand can reach, engage, and convert — right at the point where customers make their decisions.</p>
              </div>
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={brandingImg?.imageUrl || DEFAULT_PLACEHOLDER}
                  alt="Interior design showcase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-20" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="What We Do For Your Brand"
              subtitle="This approach is built to give your brand a sharper edge in a competitive market."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <BadgeDollarSignIcon />, title: "Retail Branding", desc: "Strategies that make customers choose your brand over competitors." },
                { icon: <Lightbulb />, title: "In-Shop Branding", desc: "Unique brand experiences from wall graphics to display units." },
                { icon: <PanelsTopLeft />, title: "Store Layout & Space Design", desc: "Layouts that mesmerise customers and drive long-term profitability." },
                { icon: <Signpost />, title: "Navigation & Wayfinding Signages", desc: "Signages that guide customers and impact their purchase decisions." },
                { icon: <ShoppingBag />, title: "Visual Merchandising", desc: "Merchandising strategies that bring customers in and back again. structure, hierarchy, readability, and composition." },
                { icon: <Sofa />, title: "Retail Store Interior Designing", desc: "Interiors that build the right atmosphere around your brand" },
                { icon: <Hammer />, title: "Materials & Fabrications", desc: "Budget-friendly materials that forge deeper customer brand connections." },
                { icon: <Megaphone />, title: "Outdoor Advertising", desc: "High-footfall placements that put your brand where it matters." },
                { icon: <SparkleIcon />, title: "Brand Activation", desc: "Events and installations that build strong direct brand-connect." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-muted bg-white p-6 transition-all hover:border-secondary/100 hover:bg-muted/30"
                >
                  <div className="h-fit rounded-lg bg-primary/5 p-3 text-primary">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-lg text-primary">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-primary py-20 text-white" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="Choose Your Engagement. Grow Your Brand."
                subtitle={
                <>
                  No matter where your brand stands today, the outcome is the same:{" "}
                  <span className="font-semibold text-secondary">stronger presence</span>,{" "}
                  <span className="font-semibold text-secondary">better recall</span>, and{" "}
                  <span className="font-semibold text-secondary">more customers.</span>
                </>   
              }           light
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                { title: "Retail Branding Package", duration: "Project-Based", desc: "Any Business with a Physical Store Complete in-store branding and retail experience." },
                { title: "In-Shop Branding & Store Design", duration: "Project-Based", desc: "Retail Stores & Showrooms Branded interiors from wall graphics to displays." },
                { title: "Store Layout & Space Design", duration: "Project-Based", desc: "New Stores & Store Renovations Space planning that guides and converts customers." },
                { title: "Visual Merchandising Package", duration: "Project-Based", desc: "Retail Brands & Fashion Labels Display solutions that bring customers back again." },
                { title: "Full Retail Brand Strategy", duration: "Project-Based", desc: "Growing Retail Businesses & Startups End-to-end strategy from R&D to execution." },
              ].map((item) => (
                <Card key={item.title} className="group border-white/20 bg-white/10 transition-all hover:bg-white/20">
                  <CardContent className="flex h-full flex-col p-6 text-center">
                    <div className="flex-grow space-y-3">
                      <h4 className="font-headline text-xl text-white">{item.title}</h4>
                      <Badge variant="secondary" className="bg-secondary text-white">{item.duration}</Badge>
                      {/* <div className="rounded border border-white/10 bg-white/5 p-2 text-xs text-white/60">
                        <span className="mr-1 font-bold text-secondary">Eligibility:</span>
                        {item.eligibility}
                      </div> */}
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <ScrollToLeadButton
                        variant="outline"
                        className="w-full border-white/60 bg-transparent text-sm font-bold text-white hover:bg-white/10 hover:text-white"
                      >
                        Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                      </ScrollToLeadButton>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden bg-white py-24" style={deferredSectionStyle}>
          <div className="container relative z-10 mx-auto max-w-7xl space-y-8 px-4 text-center">
            <h2 className="font-headline text-4xl text-primary md:text-5xl">Your Brand Won't Wait.</h2>
            <p>The right marketing partner can help you grow faster.</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 w-full border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-auto"
              >
                Learn More
              </ScrollToLeadButton>
              <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto"
              >
                Start Your Brand Journey Today
              </ScrollToLeadButton>
              <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 w-15 border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-autogit remote add origin "
              >
                Enquire Now
              </ScrollToLeadButton>
            </div>
            <p className="text-sm text-muted-foreground">Don&apos;t wait to turn your brand's potential into performance.</p>
          </div>
        </section>

        <section id="lead-form" className="w-full bg-muted py-10" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="font-headline text-3xl text-primary">Are you ready to put your brand where it belongs?</h2>
                  <p className="text-lg text-muted-foreground">
                    Get expert retail branding strategies tailored to your store. Fill in your details and take the first step today.
                  </p>
                  <p className="text-base font-semibold text-secondary">
                    Enquire Now!
                  </p>
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-primary pb-28 pt-8 text-white lg:py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} International School of Design (INSD) Delhi. All Rights Reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 flex w-screen gap-2 border-t bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-2 px-4">
          <ScrollToLeadButton className="h-12 flex-1 bg-secondary font-bold text-white">
            Apply Now
          </ScrollToLeadButton>
        </div>
      </div>
    </div>
  );
}