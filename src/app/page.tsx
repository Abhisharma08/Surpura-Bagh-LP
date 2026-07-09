import Image from "next/image";
import {
  MapPinned,
  Building2,
  PackageOpen,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  Subtitles,
  UtensilsCrossed,
  Leaf,
  Heart,
  Smile,
  Amphora,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import ScrollToLeadButton from "@/components/ScrollToLeadButton";
import SectionHeader from "@/components/SectionHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: 'Brand Activation Agency in Bangalore | 500+ Activations | AD Vantage',
  description: 'On-ground brand activations in Bangalore. Mall, sampling, campus & BTL. 80+ brands. 1,200+ consumer contacts/campaign. Get free plan in 24 hrs.',
};

const LOGO_URL =
  "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1916,h_1210,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/surpura-bagh/surpura_png_13250d6a";

const HERO_BG_URL =
  "https://assets.simplotel.com/simplotel/image/upload/w_3333,h_5000/x_0,y_1760,w_3333,h_1480,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/surpura-bagh/outdoor-dining-setup";

const DEFAULT_PLACEHOLDER =
  "https://picsum.photos/seed/placeholder/800/600";
const STAYS = [
  {
    title: "Private Plunge Pool Suites",
    description:
      "Experience complete privacy in spacious suites featuring your own plunge pool, handcrafted interiors, and tranquil outdoor spaces.",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_116,y_0,w_1058,h_794,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/surpura-bagh/IMG_6057",
    button: "Book Now →",
    features: [
      "Private plunge pool",
      "Spacious luxury interiors",
      "Artisan-crafted furnishings",
      "Perfect for couples & celebrations",
    ],
  },

  {
    title: "Garden-Facing Cottages",
    description:
      "Wake up to lush greenery and unwind in thoughtfully designed cottages that bring you closer to nature.",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_90,y_0,w_1420,h_1066,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/surpura-bagh/couple-dining-1",
    button: "Book Now →",
    features: [
      "Garden views",
      "Private sit-out",
      "Peaceful surroundings",
      "Family-friendly stay",
    ],
  },

  {
    title: "Luxury Tent Suites",
    description:
      "Experience the charm of luxury camping with elegant tent suites that combine outdoor living with modern comforts.",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_219,y_0,w_3498,h_2624,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/surpura-bagh/outdoor-dining-area",
    button: "Book Now →",
    features: [
      "Luxury glamping experience",
      "Contemporary amenities",
      "Spacious interiors",
      "Unique stay experience",
    ],
  },

  {
    title: "Weddings & Celebrations",
    description:
      "Celebrate life's biggest moments with expansive lawns, elegant venues, and personalised event planning.",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_90,y_0,w_1420,h_1066,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/surpura-bagh/beae395c-7b46-4f00-9d2e-def0ea401c81_99097059",
    button: "Enquire Now →",
    features: [
      "Up to 3,000 guests",
      "Multiple event venues",
      "Wedding accommodation",
      "Dedicated planning support",
    ],
  },

  {
    title: "Corporate Retreats",
    description:
      "Host productive meetings, team outings, and corporate events in a peaceful setting surrounded by nature.",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_90,y_0,w_1420,h_1066,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/surpura-bagh/couple-dining-1",
    button: "Enquire Now →",
    features: [
      "Team retreats",
      "Corporate events",
      "Luxury accommodation",
      "Curated dining experiences",
    ],
  },
];

export default function LandingPage() {
  const RoomImg = PlaceHolderImages.find(
    (img) => img.id === "Room-Picture"
  );

  const OutDoorImg = PlaceHolderImages.find(
    (img) => img.id === "OutDoor-Design"
  );
  const OutDoorArielImg = PlaceHolderImages.find(
    (img) => img.id === "OutDoorAriel-Design"
  );

  const deferredSectionStyle = {
    contentVisibility: "auto",
    containIntrinsicSize: "900px",
  } as const;

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <nav className="fixed top-0 z-50 w-full overflow-x-hidden border-b bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2" aria-label="AD Vantage Logo">
            <Image
              src={LOGO_URL}
              alt="AD Vantage Logo"
              width={200}
              height={50}
              className="h-20 w-auto object-contain"
              priority
              quality={60}
            />
          </div>

          <div className="flex items-center gap-4">
            <ScrollToLeadButton className="bg-primary px-6 font-bold text-white hover:bg-primary/90">
             Book Your Stay
            </ScrollToLeadButton>
          </div>
        </div>
      </nav>

      <main className="w-full pb-24 pt-20 lg:pb-0">

{/* HERO SECTION */}
<section className="relative w-full overflow-hidden py-24 lg:py-32">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src={HERO_BG_URL}
      alt="Surpura Bagh"
      fill
      priority
      className="object-cover"
      quality={70}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/55" />
  </div>

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* LEFT CONTENT */}

      <div className="space-y-8 text-white">

        <h1 className="font-headline text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          Experience Jodhpur&apos;s Most Peaceful Luxury Resort
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-white/90 italic">
          Experience slow luxury across 28 acres of landscaped gardens with
          private plunge-pool suites, curated dining experiences, and grand
          celebration spaces. Where nature, privacy, and personalised
          hospitality come together for unforgettable stays.
        </p>

        <div className="flex flex-wrap gap-4">

          <ScrollToLeadButton className="bg-primary px-8 py-6 text-base font-semibold text-white hover:bg-primary/90">
            Book Your Stay
          </ScrollToLeadButton>

          <ScrollToLeadButton
            variant="outline"
            className="border-white bg-transparent px-8 py-6 text-base text-white hover:bg-white hover:text-black"
          >
            Explore More
          </ScrollToLeadButton>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 gap-4 pt-8 lg:grid-cols-4">

          <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white">
              28 Acres
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Landscaped Gardens
            </p>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white">
              Private Suites
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Plunge Pool Experiences
            </p>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white">
              3 Dining Venues
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Curated Dining
            </p>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white">
              3,000+ Guests
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Event Capacity
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div id="lead-form-top">
        <LeadForm
          title="Book Your Stay at Surpura Bagh"
          subtitle="Complete the form below, and our team will get in touch to assist with your reservation and travel plans."
          buttonText="Book Your Stay"
        />
      </div>

    </div>
  </div>
</section>

{/* ABOUT */}
<section
  className="w-full bg-[#FFF9F3] py-24"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">

    {/* ---------- FIRST BLOCK ---------- */}

    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* IMAGE */}

      <div className="relative order-2 h-[520px] overflow-hidden rounded-2xl shadow-2xl lg:order-1">
        <Image
          src={RoomImg?.imageUrl || DEFAULT_PLACEHOLDER}
          alt="Surpura Bagh"
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 50vw"
        />
      </div>

      {/* CONTENT */}

      <div className="order-1 space-y-7 lg:order-2">

        <SectionHeader
          title="Where Nature, Luxury & Hospitality Come Together"
          subtitle=""
          centered={false}
        />

        <p className="text-lg leading-8 text-slate-900 italic">
          At Surpura Bagh, every stay is thoughtfully crafted to offer comfort,
          privacy, and meaningful experiences amidst 28 acres of landscaped
          gardens.
        </p>

        <ul className="space-y-5">

          {[
            "Private plunge-pool suites for complete relaxation",
            "Thoughtfully designed accommodations crafted by regional artisans",
            "Curated dining experiences across three unique venues",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4"
            >
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />

              <span className="text-lg text-slate-900">
                {item}
              </span>
            </li>
          ))}

        </ul>

        <p className="text-lg leading-8 text-slate-900 italic">
          More than a resort, it's a destination for memorable stays and
          celebrations.
        </p>

        <p className="text-lg leading-8 text-slate-900 italic">
          Whether you're escaping for a weekend, celebrating a special occasion,
          or planning a grand event, Surpura Bagh offers the perfect balance of
          luxury, nature, and personalised hospitality.
        </p>

      </div>

    </div>

    {/* ---------- SECOND BLOCK ---------- */}

    <div className="mt-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* CONTENT */}

      <div className="space-y-7">

        <SectionHeader
          title="Stay Experiences Designed Around You"
          subtitle=""
          centered={false}
        />

        <p className="text-lg leading-8 text-slate-900 italic">
          Every stay at Surpura Bagh is thoughtfully curated to offer comfort,
          privacy, and memorable moments surrounded by nature.
        </p>

        <ul className="space-y-5">

          {[
            "Private plunge-pool suites for ultimate relaxation",
            "Garden-facing cottages with peaceful sit-outs",
            "Luxury tent suites blending outdoor charm with modern comfort",
            "Handcrafted interiors inspired by Rajasthan's rich heritage",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4"
            >
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />

              <span className="text-lg text-slate-900">
                {item}
              </span>
            </li>
          ))}

        </ul>

      </div>

      {/* IMAGE */}

      <div className="relative h-[520px] overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={OutDoorImg?.imageUrl || DEFAULT_PLACEHOLDER}
          alt="Luxury Stay"
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 50vw"
        />
      </div>

    </div>

  </div>
</section>

{/* EXPERIENCES */}
<section
  className="w-full bg-[#FFF9F3] py-24"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">

    {/* ================= FIRST BLOCK ================= */}

    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* IMAGE */}

      <div className="relative h-[520px] overflow-hidden rounded-2xl shadow-xl">
        <Image
          src={OutDoorArielImg?.imageUrl || DEFAULT_PLACEHOLDER}
          alt="Celebrate, Unwind & Explore"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}

      <div className="space-y-7">

        <SectionHeader
          title="Celebrate, Unwind & Explore"
          subtitle=""
          centered={false}
        />

        <p className="text-lg leading-8 text-slate-900 italic">
          Whether you're seeking a peaceful getaway or planning a grand
          celebration, Surpura Bagh offers experiences that go beyond an
          ordinary stay.
        </p>

        <ul className="space-y-5">

          {[
            "Breakfast by the pool",
            "Private candlelight dinners",
            "Pottery making with local artisans",
            "Cycling across 28 acres of landscaped gardens",
            "Wedding & event venues for 3,000+ guests",
          ].map((item) => (

            <li
              key={item}
              className="flex items-center gap-4"
            >
              <ShieldCheck className="h-6 w-6 text-primary" />

              <span className="text-lg text-slate-900">
                {item}
              </span>

            </li>

          ))}

        </ul>

        <p className="text-lg leading-8 text-slate-900 italic">
          Every stay is designed to help you relax, reconnect, and create
          lasting memories.
        </p>

      </div>

    </div>

    {/* ================= SECOND BLOCK ================= */}

    <div className="mt-28">

      <SectionHeader
        title="Experiences That Make Every Stay Special"
        subtitle="Discover thoughtfully curated experiences that bring together relaxation, culture, nature, and celebration."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {[
          {
            title: "Private Plunge Pool Suites",
            desc: "Enjoy complete privacy and luxury with Jodhpur's finest collection of plunge-pool suites.",
            icon: <Sparkles className="h-7 w-7" />,
          },

          {
            title: "Curated Dining Experiences",
            desc: "Savour authentic Rajasthani flavours, global cuisine, and open-air dining across three unique venues.",
            icon: <UtensilsCrossed className="h-7 w-7" />,
          },

          {
            title: "Nature & Leisure",
            desc: "Cycle through 28 acres of landscaped gardens, unwind by the pool, or simply embrace the peaceful surroundings.",
            icon: <Leaf className="h-7 w-7" />,
          },

          {
            title: "Local Cultural Experiences",
            desc: "Experience pottery making, cattle farm visits, and authentic Rajasthani hospitality.",
            icon: <Amphora className="h-7 w-7" />,
          },

          {
            title: "Weddings & Celebrations",
            desc: "Host unforgettable weddings, family gatherings, and social events for up to 3,000 guests.",
            icon: <Heart className="h-7 w-7" />,
          },

          {
            title: "Personalised Hospitality",
            desc: "Every stay is tailored with warm service, thoughtful details, and experiences designed around you.",
            icon: <Smile className="h-7 w-7" />,
          },

        ].map((item) => (

          <Card
            key={item.title}
            className="rounded-2xl border border-[#E6D8CA] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <CardContent className="space-y-5 p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {item.icon}
              </div>

              <h3 className="font-headline text-2xl text-slate-900">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-900">
                {item.desc}
              </p>

            </CardContent>

          </Card>

        ))}

      </div>

    </div>

  </div>
</section>

{/* CHOOSE YOUR STAY */}
<section
  className="w-full bg-white text-slate-900 py-24"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">

    <SectionHeader
      title="Plan Your Escape. Create Lasting Memories."
      subtitle="Whether it's a romantic getaway, a family vacation, a destination wedding, or a corporate retreat, Surpura Bagh offers experiences that you'll cherish long after your stay."
    />

    <div className="mt-16">

      <h2 className="mb-10 text-center font-headline text-4xl font-semibold text-slate-900">
        Choose Your Stay
      </h2>

      {/* CAROUSEL */}
      <div className="relative px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {STAYS.map((item) => (
              <CarouselItem key={item.title} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col bg-white">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col h-full">
                      <h3 className="font-headline text-2xl font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-900 leading-7 italic">
                        {item.description}
                      </p>

                      {/* Features */}
                      <ul className="mt-6 space-y-3">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-slate-900">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <div className="mt-auto pt-6">
                        <ScrollToLeadButton
                          className="w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white hover:bg-primary/90"
                        >
                          {item.button}
                        </ScrollToLeadButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white shadow-md" />
          <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white shadow-md" />
        </Carousel>
      </div>

      {/* CTA BLOCK */}
      <div className="mt-20 text-center">
        <h3 className="font-headline text-3xl font-bold text-slate-900 mb-4">
          Your Escape Awaits.
        </h3>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-900 mb-10 italic">
          Whether you're planning a peaceful getaway, a family vacation, a destination wedding, or a corporate retreat, Surpura Bagh is ready to welcome you.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center items-center flex-wrap">
          <ScrollToLeadButton
            variant="outline"
            className="border-primary px-8 py-6 text-base font-semibold text-primary hover:bg-primary/5 sm:px-6"
          >
            Explore More
          </ScrollToLeadButton>

          <ScrollToLeadButton
            className="bg-primary px-8 py-6 text-base font-semibold text-white hover:bg-primary/90 sm:px-6"
          >
            Book Your Stay
          </ScrollToLeadButton>

          <ScrollToLeadButton
            className="bg-secondary px-8 py-6 text-base font-semibold text-white hover:bg-secondary/90 sm:px-6"
          >
            Enquire Now
          </ScrollToLeadButton>
        </div>
      </div>

    </div>

  </div>
</section>

        
        {/* CTA */}
        <section
          className="relative w-full overflow-hidden bg-white py-24"
          style={deferredSectionStyle}
        >
          <SectionHeader
            title={
              <>
                Ready to Experience Surpura Bagh?  
              </>
            }
            subtitle=""
            centered
          />
            <div className="container relative z-10 mx-auto max-w-7xl space-y-8 px-4 text-center">

              <p className="mx-auto max-w-3xl text-base italic leading-loose text-slate-900 md:text-lg">
                Escape to a boutique retreat where luxury, nature, and personalised hospitality come together. 
                Whether you're planning a relaxing getaway, a destination wedding, 
                or a memorable celebration, we're here to create an experience tailored just for you.
              </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

              <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto"
              >
              Book Your Stay at Surpura Bagh
              </ScrollToLeadButton>

              {/* <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-auto"
              >
                Enquire Now
              </ScrollToLeadButton> */}
            </div>
              <p className="text-xs text-muted-foreground italic text-slate-600">
              Complete the form below, and our team will get in touch to assist with your reservation and travel plans.
              </p>
            {/* <p className="text-sm text-muted-foreground">
              Don&apos;t wait to turn your brand&apos;s potential into
              performance.
            </p> */}
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="lead-form"
          className="w-full bg-muted py-10"
          style={deferredSectionStyle}
        >
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="font-headline text-4xl text-primary mb-2 font-headline font-bold">
                    Ready to Experience Surpura Bagh?
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    Escape to a boutique retreat where luxury, nature, and personalised hospitality come together. 
                    Whether you're planning a relaxing getaway, a destination wedding, or a memorable celebration, 
                    we're here to create an experience tailored just for you.
                     </p>
                    <p>
                  </p>
                  <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto italic "
              >
              Get My Free Activation Plan →
              </ScrollToLeadButton>
                </div>

              <LeadForm
              title="Free Plan. 24 Hours."
              subtitle="Share your brief and get a custom activation strategy within 24 hours."
              buttonText="Send Brief — Get My Plan →"
              buttonclassName="italic tracking-wide"
              bottomText={ <>
                Free custom plan in 24 working hours.
              </> }
            /> 
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-primary pb-28 pt-8 text-white lg:py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-xs text-white/60">
          <p>©2026 AD Vantage Integrated Marketing All Rights Reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 flex w-screen gap-2 border-t bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-2 px-4">
          <ScrollToLeadButton className="h-12 flex-1 bg-secondary font-bold text-white">
            Book Your Stay at Surpura Bagh
          </ScrollToLeadButton>
          
        </div>
      </div>
    </div>
  );
}