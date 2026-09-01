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

import { Card, CardContent } from "@/components/ui/card";
import LeadForm from "@/components/LeadForm";
import ScrollToLeadButton from "@/components/ScrollToLeadButton";
import SectionHeader from "@/components/SectionHeader";
import StayCardsCarousel from "@/components/StayCardsCarousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const LOGO_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,h_160/v1787985411/surpura_png_13250d6a_ctwjfo.avif";

const HERO_BG_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,w_1920/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png";

const DEFAULT_PLACEHOLDER =
  "https://picsum.photos/seed/placeholder/800/600";

const STAYS = [
  {
    title: "Village Lounge",
    description:
      "An intimate, hut-inspired celebration venue perfect for Mehendi ceremonies, Haldi functions, bridal brunches, and welcome lunches.",
    image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,w_800/v1784792500/Village_Lawn_jowloy.png",
    button: "Enquire Now →",
    features: [
      "Up to 300 pax",
      "Rustic Architecture",
      "Open-air Celebration",
      "Village Lounge Lawn",
    ],
  },
  {
    title: "Baradari Lawn",
    description:
      "Celebrate amidst centuries-old heritage architecture with one of Surpura Bagh's most iconic wedding settings.",
    image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,w_800/v1784792497/Bardari_at15jm.png",
    button: "Enquire Now →",
    features: [
      "Historic Baradari",
      "Heritage Architecture",
      "Up to 2,500 pax",
      "Royal Wedding Setting",
    ],
  },
  {
    title: "Kokum",
    description:
      "A vibrant poolside venue for cocktail evenings, welcome dinners, Mehendi celebrations, and unforgettable after-parties.",
    image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,w_800/v1784792499/Kokum_yrdlwu.png",
    button: "Enquire Now →",
    features: [
      "Poolside Venue",
      "Up to 400 pax",
      "Cocktail Evenings",
      "After Hours Celebrations",
    ],
  },
  {
    title: "Rasala Garden",
    description:
      "A beautifully landscaped venue ideal for Mehendi, Sangeet, cocktail evenings, and intimate wedding celebrations.",
    image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,w_800/v1784528697/Rasala_Lawn_jwy3kf.png",
    button: "Enquire Now →",
    features: [
      "6,500 sq. m. garden venue",
      "Up to 2,000 pax",
      "Jharokha Wedding Mandap",
      "Perfect for pre-wedding functions",
      "Elegant open-air setting",
    ],
  },
  {
    title: "Mandore Lawn",
    description:
      "Our largest celebration venue, designed for grand destination weddings and lavish receptions.",
    image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,w_800/v1784528690/Mandore_lawn_yqhstx.png",
    button: "Enquire Now →",
    features: [
      "8,500 sq. m. lawn",
      "3,000+ pax capacity",
      "Perfect for large-scale celebrations",
      "Spacious outdoor venue",
    ],
  },
  {
    title: "Luxury Stay for Wedding Guests",
    description:
      "Luxury Pool Villas, Plunge Pool Suites, Garden Suites, and Vana Executive Suites designed for complete comfort throughout your celebrations.",
    image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,w_800/v1783934482/Luxury_stay_z8p4t0.webp",
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
    image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto,w_800/v1783934484/wed_cja6l2.png",
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
  const RoomImg = PlaceHolderImages.find(
    (img) => img.id === "Room-Picture"
  );

  const OutDoorImg = PlaceHolderImages.find(
    (img) => img.id === "OutDoor-Design"
  );
  const OutDoorArielImg = PlaceHolderImages.find(
    (img) => img.id === "OutDoorAriel-Design"
  );
  const CelebrateMomentsImg = PlaceHolderImages.find(
    (img) => img.id === "celebrate-moments-image"
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
              className="h-16 w-auto object-contain md:h-20"
              priority
              unoptimized
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
              alt="Surpura Bagh Destination Wedding Venue"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
              quality={75}
              unoptimized
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="container relative z-10 mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="space-y-8 text-white">
                <h1 className="font-headline text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                  Host a Luxury Boutique Destination Wedding in Jodhpur
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-white/90 italic">
                  Celebrate your special day amidst 28 acres of landscaped gardens, 
                  heritage-inspired celebration spaces, elegant luxury suites, and bespoke hospitality. 
                  From intimate ceremonies to grand weddings with over 3,000 pax, 
                  Surpura Bagh creates destination weddings inspired by Rajasthan's royal charm and modern luxury. 
                </p>

                {/* STATS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-8">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md flex flex-col items-center text-center">
                    <Trees className="h-7 w-7 text-white mb-1.5" />
                    <p className="text-base font-bold text-white">
                      28 Acres
                    </p>
                    <p className="mt-0.5 text-xs text-white/80">
                      Landscaped Gardens
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md flex flex-col items-center text-center">
                    <Home className="h-7 w-7 text-white mb-1.5" />
                    <p className="text-base font-bold text-white">
                      5 Wedding Venues
                    </p>
                    <p className="mt-0.5 text-xs text-white/80">
                      Outdoor Celebration Spaces
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md flex flex-col items-center text-center">
                    <ChefHat className="h-7 w-7 text-white mb-1.5" />
                    <p className="text-base font-bold text-white">
                      Luxury villas
                    </p>
                    <p className="mt-0.5 text-xs text-white/80">
                      Stay for Family & Guests
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md flex flex-col items-center text-center">
                    <Users className="h-7 w-7 text-white mb-1.5" />
                    <p className="text-base font-bold text-white">
                      3,000+ pax
                    </p>
                    <p className="mt-0.5 text-xs text-white/80">
                      Event Capacity
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div id="lead-form-top">
                <LeadForm
                  title="Plan Your Wedding at Surpura Bagh"
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
            {/* FIRST BLOCK */}
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative order-2 h-[520px] overflow-hidden rounded-2xl shadow-2xl lg:order-1">
                <Image
                  src={RoomImg?.imageUrl || DEFAULT_PLACEHOLDER}
                  alt="Surpura Bagh"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>

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

            {/* SECOND BLOCK */}
            <div className="mt-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
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
            {/* FIRST BLOCK */}
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative h-[520px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={CelebrateMomentsImg?.imageUrl || DEFAULT_PLACEHOLDER}
                  alt="After Hours at Kokum"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>

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

            {/* AFTER HOURS AT KOKUM */}
            <div className="mt-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="space-y-7">
                <SectionHeader
                  title="When the Celebrations Continue"
                  subtitle=""
                  centered={false}
                />

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    After Hours at Kokum
                  </p>
                </div>

                <p className="text-lg leading-8 text-slate-900 italic">
                  As the stars illuminate the Jodhpur sky, <strong>After Hours at Kokum </strong>
                  transforms into an elegant celebration under the open air. Framed by the
                  serene pool, glowing lights, and a vibrant atmosphere, this distinctive
                  venue comfortably accommodates <strong>800–1,000 guests</strong>, making it
                  the perfect setting for cocktail evenings, wedding after-parties, and
                  unforgettable celebrations with family and friends.
                </p>

                <div>
                  <h3 className="mb-5 font-headline text-2xl font-semibold text-slate-900">
                    Perfect For
                  </h3>

                  <ul className="space-y-4">
                    {[
                      "Cocktail Evenings",
                      "Wedding After-Parties",
                      "Live Music & Entertainment",
                      "Intimate Late-Night Celebrations",
                      "Poolside Celebrations Under the Stars",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />
                        <span className="text-lg text-slate-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg font-bold italic text-slate-900">
                  Where every celebration continues long after the last dance.
                </p>
              </div>

              <div className="relative h-[520px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={OutDoorArielImg?.imageUrl || DEFAULT_PLACEHOLDER}
                  alt="After Hours at Kokum"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* SECOND BLOCK */}
            <div className="mt-28">
              <SectionHeader
                title="Everything You Need for Your Perfect Destination Wedding"
                subtitle="Discover thoughtfully curated experiences that bring together relaxation, culture, nature, and celebration."
              />

              <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Grand Celebration Venues",
                    desc: "Five distinctive venues designed for every wedding celebration—from intimate Mehendi ceremonies to grand receptions for over 3,000 pax.",
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

              <StayCardsCarousel stays={STAYS} />

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
                    className="border-primary px-8 py-6 text-base font-semibold text-white hover:bg-primary/5 sm:px-6"
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
                  <h2 className="font-headline text-4xl text-black mb-2 font-headline font-bold">
                    Ready to Plan Your Dream Wedding?
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    Celebrate your special day at Surpura Bagh, where breathtaking venues, luxury accommodation, 
                    and personalised hospitality come together to create unforgettable celebrations.
                  </p>
                  
                  <ScrollToLeadButton
                    size="lg"
                    className="h-14 w-full bg-primary px-10 text-lg font-bold text-white hover:bg-primary/90 sm:w-auto italic"
                  >
                    Enquire About Your Destination Wedding
                  </ScrollToLeadButton>
                </div>

                <LeadForm
                  title="Plan Your Wedding at Surpura Bagh"
                  subtitle="Complete the form below, and our wedding specialists will get in touch to discuss your preferred dates, 
                  guest count, venue options, accommodation, and customised wedding requirements."
                  buttonText=" Enquire Now"
                  buttonclassName="italic tracking-wide"
                  bottomText={<></>}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-primary pb-28 pt-8 text-white lg:py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-xs text-white/80">
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
