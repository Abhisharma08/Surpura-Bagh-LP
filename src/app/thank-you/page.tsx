import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"

const LOGO_URL = "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1916,h_1210,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/surpura-bagh/surpura_png_13250d6a";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primary overflow-x-hidden">
      {/* Simple Header */}
      <nav className="bg-white/95 border-b shadow-sm backdrop-blur-md h-20 flex items-center w-full">
        <div className="container mx-auto px-4 max-w-7xl w-full">
          <Link href="/" prefetch={false}>
            <Image 
              src={LOGO_URL} 
              alt="Surpura Bagh Logo" 
              width={180} 
              height={45} 
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border p-8 md:p-12 text-center space-y-8">
          <div className="flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-headline text-primary">Thank You!</h1>
            <p className="text-lg text-slate-900">
              Your booking inquiry has been received. Our team will contact you within 24 hours to assist with your reservation.
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 space-y-4">
            <p className="font-medium text-primary text-bold">What happens next?</p>
            <p className="text-sm text-slate-900">
              Our team will reach out via phone or email to confirm your booking details and answer any questions you may have.
            </p>
          </div>

          <div className="pt-6 border-t space-y-6">
            <div className="flex justify-center">
              <Link href="/" prefetch={false}>
                <Button variant="outline" className="gap-2 border-primary text-white bg-primary/90">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-8 text-center text-xs text-white w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-white/60">© {new Date().getFullYear()} Surpura Bagh All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
