"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Leaf,
  Heart,
  Smile,
  Amphora,
  Trees,
  Home,
  ChefHat,
  Users,
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

// export const metadata = {
//   title: "Luxury Resort in Jodhpur | Private Pool Suites | Surpura Bagh",
//   description: "Experience slow luxury at Surpura Bagh, Jodhpur's boutique resort set across 28 acres of landscaped gardens. Stay in private plunge-pool suites, enjoy curated dining, destination weddings, and personalised hospitality.",
// };

const LOGO_URL =
  "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1916,h_1210,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/surpura-bagh/surpura_png_13250d6a";

const HERO_BG_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1783887183/DSC01268_967f735f_mwpfv8.webp";

const DEFAULT_PLACEHOLDER =
  "https://picsum.photos/seed/placeholder/800/600";
const STAYS = [
{
  title: "Village Lounge",
  description:
    "An intimate, hut-inspired celebration venue perfect for Mehendi ceremonies, Haldi functions, bridal brunches, and welcome lunches.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784528695/Jharokha_lawn_hi9ril.png",
  button: "Enquire Now →",
  features: [
    "Up to 300 Guests",
    "Rustic Architecture",
    "Open-air Celebration",
    "Village Lounge Lawn",
  ],
},

{
  title: "Baradari Lawn",
  description:
    "Celebrate amidst centuries-old heritage architecture with one of Surpura Bagh's most iconic wedding settings.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784528695/Jharokha_lawn_hi9ril.png",
  button: "Enquire Now →",
  features: [
    "Historic Baradari",
    "Heritage Architecture",
    "Up to 2,500 Guests",
    "Royal Wedding Setting",
  ],
},

{
  title: "Kokum",
  description:
    "A vibrant poolside venue for cocktail evenings, welcome dinners, Mehendi celebrations, and unforgettable after-parties.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784528697/Rasala_Lawn_jwy3kf.png",
  button: "Enquire Now →",
  features: [
    "Poolside Venue",
    "Up to 400 Guests",
    "Cocktail Evenings",
    "After Hours Celebrations",
  ],
},

{
  title: "Rasala Garden",
  description:
    "A beautifully landscaped venue ideal for Mehendi, Sangeet, cocktail evenings, and intimate wedding celebrations.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784528697/Rasala_Lawn_jwy3kf.png",
  button: "Enquire Now →",
  features: [
    "6,500 sq. m. garden venue",
    "Up to 2,000 guests",
    "Jharokha Wedding Mandap",
    "Perfect for pre-wedding functions",
    "Elegant open-air setting",
  ],
},

{
  title: "Mandore Lawn",
  description:
    "Our largest celebration venue, designed for grand destination weddings and lavish receptions.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784528690/Mandore_lawn_yqhstx.png",
  button: "Enquire Now →",
  features: [
    "8,500 sq. m. lawn",
    "3,000+ guest capacity",
    "Perfect for large-scale celebrations",
    "Spacious outdoor venue",
  ],
},

{
  title: "Luxury Stay for Wedding Guests",
  description:
    "Luxury Pool Villas, Plunge Pool Suites, Garden Suites, and Vana Executive Suites designed for complete comfort throughout your celebrations.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1783934482/Luxury_stay_z8p4t0.webp",
  button: "Enquire Now →",
  features: [
    "Private Plunge Pool Suites",
    "Garden Suites",
    "Pool Villas",
    "Premium Hospitality",
  ],
},

{
  title: "Wedding Planning & Hospitality",
  description:
    "From venue selection to guest management, our experienced team ensures every detail is seamlessly executed.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1783934484/wed_cja6l2.png",
  button: "Enquire Now →",
  features: [
    "Dedicated wedding coordinator",
    "Event planning support",
    "Curated catering experiences",
    "Personalised guest hospitality",
  ],
},
];

export default function LandingPage() {
  const [allCardsExpanded, setAllCardsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.innerWidth < 768);

    // Handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const expandAllCards = () => {
    setAllCardsExpanded(true);
  };

  const showExpandedStayCards = allCardsExpanded || !isMobile;

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
          <div className="flex items-center gap-2" aria-label="Surpura Bagh Logo">
            <Image
              src={LOGO_URL}
              alt="Surpura Bagh Logo"
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
          Plan Your Dream Destination Wedding in Jodhpur
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-white/90 italic">
         Celebrate your special day amidst 28 acres of landscaped gardens, 
         heritage-inspired celebration spaces, elegant luxury suites, and bespoke hospitality. 
         From intimate ceremonies to grand weddings with over 3,000 guests, 
         Surpura Bagh creates destination weddings inspired by Rajasthan's royal charm and modern luxury. 
        </p>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-8">

          <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md flex flex-col items-center text-center">
            <Trees className="h-7 w-7 text-white mb-1.5" />
            <h3 className="text-base font-bold text-white">
              28 Acres
            </h3>

            <p className="mt-0.5 text-xs text-white/80">
              Landscaped Gardens
            </p>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md flex flex-col items-center text-center">
            <Home className="h-7 w-7 text-white mb-1.5" />
            <h3 className="text-base font-bold text-white">
              3 Wedding Venues
            </h3>

            <p className="mt-0.5 text-xs text-white/80">
              Outdoor Celebration Spaces
            </p>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md flex flex-col items-center text-center">
            <ChefHat className="h-7 w-7 text-white mb-1.5" />
            <h3 className="text-base font-bold text-white">
              Luxury Suites
            </h3>

            <p className="mt-0.5 text-xs text-white/80">
              Stay for Family & Guests
            </p>
          </div>

          <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md flex flex-col items-center text-center">
            <Users className="h-7 w-7 text-white mb-1.5" />
            <h3 className="text-base font-bold text-white">
              3,000+ Guests
            </h3>

            <p className="mt-0.5 text-xs text-white/80">
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
          buttonText="Get Quote for Wedding"
          className="max-w-sm mx-auto py-8"
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
          title="Where Your Forever Begins"
          subtitle=""
          centered={false}
        />

        <p className="text-lg leading-8 text-slate-900 italic">
          Surrounded by 28 acres of lush greenery, 
          Surpura Bagh is a boutique destination where Rajasthan's royal heritage, handcrafted stone architecture, 
          and contemporary luxury come together to create extraordinary celebrations. 
        </p>

        <ul className="space-y-5">

          {[
            "Boutique destination wedding resort",
            "Heritage-inspired celebration spaces",
            "Luxury suites & pool villas for wedding guests",
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

        <p className="text-lg leading-8 text-slate-900 font-bold">
          More than a venue—it's where timeless traditions meet unforgettable celebrations.
        </p>

        <p className="text-lg leading-8 text-slate-900 italic">
          Whether you're planning an intimate ceremony or a lavish multi-day wedding, 
          every detail is thoughtfully curated to create memories that last a lifetime.
        </p>

      </div>

    </div>

    {/* ---------- SECOND BLOCK ---------- */}

    <div className="mt-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* CONTENT */}

      <div className="space-y-7">

        <SectionHeader
          title="Wedding Experiences Designed Around You"
          subtitle=""
          centered={false}
        />

        <p className="text-lg leading-8 text-slate-900 italic">
          From the heritage-inspired Jharokha and iconic Baradari to elegant lawns and poolside venues, 
          every space is designed to create a unique celebration experience.
        </p>

        <ul className="space-y-5">

          {[
            "Mehendi & Haldi Celebrations",
            "Cocktail Evenings at Kokum",
            "Sacred Pheras at Jharokha",
            "Grand Receptions on Rasala & Mandore Lawns",
            "Luxury Stay for Family & Guests",
            "Curated Dining & Bespoke Hospitality",
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
          title="Celebrate Every Moment Together"
          subtitle=""
          centered={false}
        />

        <p className="text-lg leading-8 text-slate-900 italic">
          From intimate ceremonies beneath heritage-inspired architecture to grand receptions under open skies,
           every celebration at Surpura Bagh is designed to feel effortless, elegant, and unforgettable..
        </p>

        <ul className="space-y-5">

          {[
            "Heritage celebration spaces",
            "Private plunge pool suites",
            "Bespoke culinary experiences",
            "Stunning photography backdrops",
            "Dedicated wedding planning",
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

        <p className="text-lg leading-8 text-slate-900 font-bold">
          Every celebration is thoughtfully designed around your vision.
        </p>

      </div>

    </div>

    {/* ================= SECOND BLOCK ================= */}

    <div className="mt-28">

      <SectionHeader
        title="Everything You Need for Your Perfect Destination Wedding"
        subtitle="Discover thoughtfully curated experiences that bring together relaxation, culture, nature, and celebration."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {[
{
  title: "Grand Celebration Venues",
  desc: "Five distinctive venues designed for every wedding celebration—from intimate Mehendi ceremonies to grand receptions for over 3,000 guests.",
  icon: <Sparkles className="h-7 w-7" />,
},

{
  title: "Luxury Accommodation",
  desc: "Elegant Pool Villas, Plunge Pool Suites, Garden Suites, and Vana Executive Suites designed for families and wedding guests.",
  icon: <UtensilsCrossed className="h-7 w-7" />,
},

{
  title: "Curated Culinary Experiences",
  desc: "Farm-fresh vegetarian cuisine inspired by Rajasthan and North India, complemented by bespoke wedding menus.",
  icon: <Leaf className="h-7 w-7" />,
},

{
  title: "Wedding Planning",
  desc: "Dedicated planning assistance from venue selection to guest hospitality and celebration management.",
  icon: <Amphora className="h-7 w-7" />,
},

{
  title: "Heritage Backdrops",
  desc: "Iconic Baradari, Jharokha, landscaped gardens, fountains, and heritage-inspired architecture create timeless wedding memories.",
  icon: <Heart className="h-7 w-7" />,
},

{
  title: "Complete Destination Wedding Experience",
  desc: "Accommodation, dining, celebrations, hospitality, and personalised experiences, all within one beautiful destination.",
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
      title="Begin Your Forever at Surpura Bagh"
      subtitle="Whether you dream of an intimate celebration or a grand destination wedding, 
      Surpura Bagh offers the perfect setting for memories that last a lifetime."
    />

    <div className="mt-16">

      <h2 className="mb-10 text-center font-headline text-4xl font-semibold text-slate-900">
        Choose Your Wedding Experience
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
            {STAYS.map((item) => {
              return (
                <CarouselItem key={item.title} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col bg-white">
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer md:cursor-default" onClick={() => isMobile && expandAllCards()}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content - mobile expands all cards together; desktop stays expanded */}
                      <div className={`flex flex-col h-full transition-all duration-300 ${
                        showExpandedStayCards ? 'p-8' : 'p-4 justify-center'
                      }`}>
                        <h3 className="font-headline text-2xl font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        {/* Mobile: Show compact view initially */}
                        {showExpandedStayCards ? (
                          <>
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
              );
            })}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white shadow-md" />
          <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white shadow-md" />
        </Carousel>
      </div>

      {/* CTA BLOCK */}
      <div className="mt-20 text-center">
        <h3 className="font-headline text-3xl font-bold text-slate-900 mb-4">
          Your Dream Wedding Starts Here
        </h3>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-900 mb-10 italic">
            Celebrate your love at one of Jodhpur's most beautiful destination wedding venues. 
            Let our team help you create a wedding experience that's elegant, effortless, and unforgettable.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center items-center flex-wrap">
          <ScrollToLeadButton
            variant="outline"
            className="border-primary px-8 py-6 text-base font-semibold text-primary hover:bg-primary/5 sm:px-6"
          >
            Explore Venues
          </ScrollToLeadButton>

          <ScrollToLeadButton
            className="bg-primary px-8 py-6 text-base font-semibold text-white hover:bg-primary/90 sm:px-6"
          >
           Plan Your Wedding
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
                  <h2 className="font-headline text-4xl text-white mb-2 font-headline font-bold">
                    Ready to Plan Your Dream Wedding?
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    Celebrate your special day at Surpura Bagh, where breathtaking venues, luxury accommodation, 
                    and personalised hospitality come together to create unforgettable celebrations.
                     </p>
                    <p>
                  </p>
                  <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-primary px-10 text-lg font-bold text-white hover:bg-primary/90 sm:w-auto italic "
              >
              Enquire About Your Destination Wedding
              </ScrollToLeadButton>
                </div>

              <LeadForm
              title="Book Your Stay at Surpura Bagh"
              subtitle="Complete the form below, and our wedding specialists will get in touch to discuss your preferred dates, 
              guest count, venue options, accommodation, and customised wedding requirements."
              buttonText=" Enquire Now"
              buttonclassName="italic tracking-wide"
              bottomText={ <>
              </> }
            /> 
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-primary pb-28 pt-8 text-white lg:py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-xs text-white/60">
          <p>©2026 Surpura Bagh All Rights Reserved.</p>
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
