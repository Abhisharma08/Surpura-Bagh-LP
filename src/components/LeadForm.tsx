"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, ArrowLeft, ArrowRight, Check, Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { submitToHubSpot } from "@/app/actions/hubspot"
import { cn } from "@/lib/utils"

type FormValues = {
  name: string
  email: string
  phone: string
  weddingDate: string
  guestCount: string
}

type FormErrors = Partial<Record<keyof FormValues, string>> & {
  submit?: string
}

type LeadFormProps = {
  className?: string
  title?: string
  subtitle?: string
  buttonText?: string
  bottomText?: React.ReactNode
  buttonclassName?: string
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  weddingDate: "",
  guestCount: "",
}

function validateStep1(values: FormValues) {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters."
  }

  const phoneDigits = values.phone.replace(/\D/g, "")
  if (phoneDigits.length < 10 || phoneDigits.length > 12) {
    errors.phone = "Enter a valid 10-digit phone number."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address."
  }

  return errors
}

function validateStep2(values: FormValues) {
  const errors: FormErrors = {}

  if (!values.weddingDate.trim()) {
    errors.weddingDate = "Please select a wedding date."
  }

  const guests = parseInt(values.guestCount, 10)
  if (!values.guestCount || isNaN(guests) || guests <= 0) {
    errors.guestCount = "Please enter a valid guest count."
  }

  return errors
}

export default function LeadForm({
  className,
  title = "",
  subtitle = "",
  buttonText = "Get Quote for Wedding",
  buttonclassName = "",
  bottomText = "",
}: LeadFormProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1)
  const [values, setValues] = useState<FormValues>(defaultValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const router = useRouter()

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => {
      if (!current[name as keyof FormErrors] && !current.submit) {
        return current
      }

      return {
        ...current,
        [name]: undefined,
        submit: undefined,
      }
    })
  }

  async function handleNextStep(event?: React.MouseEvent<HTMLButtonElement> | React.FormEvent) {
    if (event) event.preventDefault()

    const validationErrors = validateStep1(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const result = await submitToHubSpot({
        step: 1,
        name: values.name,
        email: values.email,
        phone: values.phone,
      })

      if (!result.success) {
        console.warn("HubSpot Step 1 Sync Issue:", result.error)
      }

      setCurrentStep(2)
    } catch (error) {
      console.error("Step 1 Submission Exception:", error)
      setErrors({
        submit: "We encountered a problem. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (currentStep === 1) {
      await handleNextStep(event)
      return
    }

    const validationErrors = validateStep2(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const result = await submitToHubSpot({
        step: 2,
        name: values.name,
        email: values.email,
        phone: values.phone,
        weddingDate: values.weddingDate,
        guestCount: values.guestCount,
      })

      if (!result.success) {
        console.warn("HubSpot Step 2 Sync Issue:", result.error)
      }

      router.push("/thank-you")
    } catch (error) {
      console.error("Step 2 Submission Exception:", error)
      setErrors({
        submit: "We encountered a problem. Please try again or contact us directly.",
      })
      setIsSubmitting(false)
    }
  }

  const selectedDate = values.weddingDate
    ? new Date(values.weddingDate + "T00:00:00")
    : undefined

  return (
    <div
      className={`rounded-xl border border-muted bg-white p-6 shadow-2xl md:p-8 ${className}`}
    >
      {title ? (
        <h3 className="mb-2 text-4xl font-headline font-bold text-slate-900">
          {title}
        </h3>
      ) : null}

      {subtitle ? (
        <p className="mb-6 text-sm text-muted-foreground">
          {subtitle}
        </p>
      ) : null}

      {/* Step Indicator */}
      <div className="mb-6 flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-2">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
              currentStep === 1
                ? "bg-primary text-white"
                : "bg-emerald-600 text-white"
            }`}
          >
            {currentStep > 1 ? <Check className="h-4 w-4" /> : "1"}
          </span>
          <span
            className={`text-xs md:text-sm font-medium ${
              currentStep === 1 ? "text-slate-900 font-semibold" : "text-slate-500"
            }`}
          >
            Personal Details
          </span>
        </div>

        <div className="h-0.5 w-6 bg-slate-200" />

        <div className="flex items-center space-x-2">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
              currentStep === 2
                ? "bg-primary text-white"
                : "bg-slate-200 text-slate-600"
            }`}
          >
            2
          </span>
          <span
            className={`text-xs md:text-sm font-medium ${
              currentStep === 2 ? "text-slate-900 font-semibold" : "text-slate-500"
            }`}
          >
            Event Details
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {currentStep === 1 ? (
          <>
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-900"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your Name"
                autoComplete="name"
                className="flex h-11 w-full rounded-md border border-slate-500 bg-white px-3 py-2 text-sm text-black placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />

              {errors.name ? (
                <p className="text-sm text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-slate-900"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                autoComplete="tel"
                inputMode="numeric"
                className="flex h-11 w-full rounded-md border border-slate-500 bg-white px-3 py-2 text-sm text-black placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />

              {errors.phone ? (
                <p className="text-sm text-destructive">
                  {errors.phone}
                </p>
              ) : null}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-900"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Your Email"
                autoComplete="email"
                className="flex h-11 w-full rounded-md border border-slate-500 bg-white px-3 py-2 text-sm text-black placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />

              {errors.email ? (
                <p className="text-sm text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </>
        ) : (
          <>
            {/* Wedding Date */}
            <div className="space-y-1.5">
              <label
                htmlFor="weddingDate"
                className="text-sm font-medium text-slate-900"
              >
                Wedding Date
              </label>

              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id="weddingDate"
                    type="button"
                    variant="outline"
                    className={cn(
                      "flex h-11 w-full items-center justify-between rounded-md border border-slate-500 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-left hover:bg-slate-50 hover:text-black",
                      !values.weddingDate && "text-slate-400"
                    )}
                  >
                    {selectedDate ? (
                      format(selectedDate, "PPP")
                    ) : (
                      <span>Pick a wedding date</span>
                    )}
                    <CalendarIcon className="h-4 w-4 text-slate-400 ml-auto" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 border border-slate-200 shadow-xl rounded-xl bg-white text-black" align="start" sideOffset={4}>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      if (date) {
                        const formatted = format(date, "yyyy-MM-dd")
                        setValues((prev) => ({ ...prev, weddingDate: formatted }))
                        setIsCalendarOpen(false)
                      } else {
                        setValues((prev) => ({ ...prev, weddingDate: "" }))
                      }
                      setErrors((prev) => ({
                        ...prev,
                        weddingDate: undefined,
                        submit: undefined,
                      }))
                    }}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                  />
                </PopoverContent>
              </Popover>

              {errors.weddingDate ? (
                <p className="text-sm text-destructive">
                  {errors.weddingDate}
                </p>
              ) : null}
            </div>

            {/* Guest Count */}
            <div className="space-y-1.5">
              <label
                htmlFor="guestCount"
                className="text-sm font-medium text-slate-900"
              >
                Guest Count
              </label>

              <input
                id="guestCount"
                name="guestCount"
                type="number"
                min="1"
                placeholder="e.g. 150"
                value={values.guestCount}
                onChange={handleChange}
                className="flex h-11 w-full rounded-md border border-slate-500 bg-white px-3 py-2 text-sm text-black placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />

              {errors.guestCount ? (
                <p className="text-sm text-destructive">
                  {errors.guestCount}
                </p>
              ) : null}
            </div>
          </>
        )}

        {errors.submit ? (
          <p className="rounded-md border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm text-destructive">
            {errors.submit}
          </p>
        ) : null}

        {currentStep === 1 ? (
          <Button
            type="button"
            onClick={handleNextStep}
            className={`h-14 w-full bg-primary text-lg font-bold text-white hover:bg-primary/90 mt-6 ${buttonclassName}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 animate-spin" />
                Saving Step 1...
              </>
            ) : (
              <>
                Next: Event Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        ) : (
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(1)}
              className="h-14 px-4 border border-slate-500 bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900"
              disabled={isSubmitting}
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back
            </Button>
            <Button
              type="submit"
              className={`h-14 flex-1 bg-primary text-lg font-bold text-white hover:bg-primary/90 ${buttonclassName}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground">
          {bottomText}
        </p>
      </form>
    </div>
  )
}