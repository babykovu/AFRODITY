import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4cf42a_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container relative z-10 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          <span className="text-primary block mb-2">AFRODITY</span>
          Where African Music Meets Global Success
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Monetize. Distribute. Elevate.
        </p>

        <p className="text-gray-400 max-w-2xl mb-10">
          Are you an artist looking to amplify your music and maximize your
          earnings? Welcome to AFRODITY, the revolutionary record label
          empowering African artists to monetize their talent and distribute
          their music globally—effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#signup">
            <Button size="lg" className="w-full sm:w-auto text-lg">
              Join the Movement
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg border-primary text-primary hover:text-primary hover:bg-primary/10"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Accent bar */}
      <div className="h-2 w-full bg-gradient-to-r from-afrodity-green1 via-afrodity-green3 to-afrodity-green5" />
    </section>
  );
}
