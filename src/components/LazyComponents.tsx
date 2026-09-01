"use client";

import dynamic from "next/dynamic";

// Below-fold, heavy components deferred to reduce initial JS / TBT
export const StayCardsCarouselLazy = dynamic(
  () => import("@/components/StayCardsCarousel"),
  {
    ssr: false,
    loading: () => (
      <div className="flex gap-4 overflow-hidden px-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="min-w-[320px] h-[520px] rounded-2xl bg-slate-100 animate-pulse"
          />
        ))}
      </div>
    ),
  }
);

export const LeadFormLazy = dynamic(() => import("@/components/LeadForm"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-muted bg-white p-8 shadow-2xl animate-pulse h-64" />
  ),
});
