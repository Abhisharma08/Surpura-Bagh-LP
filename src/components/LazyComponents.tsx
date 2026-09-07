"use client";

import dynamic from "next/dynamic";

// Hero LeadForm — ssr:false completely removes date-fns + Radix Calendar/Popover
// from the critical JS bundle. On mobile the form is below the fold anyway.
// On desktop it renders after hydration with a skeleton placeholder.
export const LeadFormHero = dynamic(() => import("@/components/LeadForm"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-muted bg-white p-6 shadow-2xl md:p-8">
      <div className="h-8 w-3/4 rounded bg-slate-200 mb-3 animate-pulse" />
      <div className="h-3 w-full rounded bg-slate-100 mb-1 animate-pulse" />
      <div className="h-3 w-5/6 rounded bg-slate-100 mb-6 animate-pulse" />
      <div className="mb-4 flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-primary/30 animate-pulse" />
          <div className="h-3 w-20 rounded bg-slate-200 animate-pulse" />
        </div>
        <div className="h-0.5 w-6 bg-slate-200" />
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-slate-200 animate-pulse" />
          <div className="h-3 w-20 rounded bg-slate-200 animate-pulse" />
        </div>
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <div className="h-3 w-24 rounded bg-slate-200 mb-2 animate-pulse" />
            <div className="h-11 w-full rounded-md bg-slate-100 animate-pulse" />
          </div>
        ))}
      </div>
      <div className="mt-6 h-14 w-full rounded-md bg-primary/20 animate-pulse" />
    </div>
  ),
});

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

