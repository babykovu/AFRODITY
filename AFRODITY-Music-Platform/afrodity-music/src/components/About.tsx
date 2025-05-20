import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            {/* Replace with actual founder image when available */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10 mix-blend-multiply" />
            <div className="w-full h-full bg-gray-400 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg z-20">
                Founder Image Placeholder
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                🌍 Rooted in Kenya, Built for Africa
              </h2>
              <Separator className="w-20 h-1 bg-primary my-4" />
            </div>

            <p className="text-lg text-gray-700">
              Founded by Ayub Roosevelt Ngala, a visionary Kenyan entrepreneur
              and artist, AFRODITY is more than a label—it's a movement.
              Inspired by Africa's vibrant rhythms, this platform is tailored to
              uplift artists and reshape the industry by putting more earnings,
              better distribution, and greater opportunities directly into your
              hands.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-3">
                🎨 Aesthetic That Speaks Africa
              </h3>
              <p className="text-gray-700">
                Our platform embraces Kenyan vibrance, infused with dynamic
                shades of green—evoking the freshness of success and the energy
                of a thriving music scene. Every element of AFRODITY is designed
                with Africa's creative spirit at its core.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="w-12 h-12 rounded-full bg-afrodity-green1" />
              <div className="w-12 h-12 rounded-full bg-afrodity-green2" />
              <div className="w-12 h-12 rounded-full bg-afrodity-green3" />
              <div className="w-12 h-12 rounded-full bg-afrodity-green4" />
              <div className="w-12 h-12 rounded-full bg-afrodity-green5" />
              <div className="w-12 h-12 rounded-full bg-afrodity-green6 border border-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
