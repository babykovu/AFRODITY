import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "AFRODITY transformed my music career. I've seen my streams increase by 300% and my earnings have never been better.",
    author: "Amina K.",
    role: "Singer-Songwriter, Nairobi",
  },
  {
    id: "testimonial-2",
    quote:
      "As an independent artist, I was struggling with distribution until I found AFRODITY. Now my music is on every major platform and my fanbase is growing daily.",
    author: "David M.",
    role: "Afrobeats Producer, Lagos",
  },
  {
    id: "testimonial-3",
    quote:
      "The marketing support from AFRODITY got my latest single placed on major playlists. My monthly listeners quadrupled in just weeks!",
    author: "Sarah N.",
    role: "Vocalist, Accra",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-afrodity-green6/30">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Artists Are Saying
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Join the growing community of successful African artists who've
            elevated their careers with AFRODITY.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-2 border-afrodity-green5 bg-white"
            >
              <CardContent className="pt-6 relative">
                <Quote className="absolute top-6 right-6 h-6 w-6 text-afrodity-green3 opacity-50" />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
