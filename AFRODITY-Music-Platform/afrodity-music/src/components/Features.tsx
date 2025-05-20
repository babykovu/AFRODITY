import {
  Music,
  Globe,
  TrendingUp,
  DollarSign,
  Layers,
  BarChart4,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    id: "global-distribution",
    icon: <Globe className="h-12 w-12 text-primary mb-4" />,
    title: "Global Distribution",
    description:
      "Distribute your music across Spotify, Apple Music, Amazon Music, Tidal, and more with just a few clicks.",
  },
  {
    id: "maximum-revenue",
    icon: <DollarSign className="h-12 w-12 text-primary mb-4" />,
    title: "Maximum Revenue",
    description:
      "Our streamlined system ensures you maximize your revenue from streams, downloads, and royalties without the usual headaches.",
  },
  {
    id: "strategic-marketing",
    icon: <TrendingUp className="h-12 w-12 text-primary mb-4" />,
    title: "Strategic Marketing",
    description:
      "Grow your fanbase faster with strategic marketing campaigns, including playlist placements and social media promotions.",
  },
  {
    id: "complete-control",
    icon: <Layers className="h-12 w-12 text-primary mb-4" />,
    title: "Complete Control",
    description:
      "Maintain full artistic control while we handle the business side, allowing your creativity to flow uninterrupted.",
  },
  {
    id: "real-time-analytics",
    icon: <BarChart4 className="h-12 w-12 text-primary mb-4" />,
    title: "Real-time Analytics",
    description:
      "Track your performance with detailed analytics on streams, audience demographics, and revenue in real-time.",
  },
  {
    id: "artist-support",
    icon: <Music className="h-12 w-12 text-primary mb-4" />,
    title: "Artist Support",
    description:
      "Access professional guidance, resources, and opportunities to help your career thrive in the digital era of music.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Amplify Your Music Career
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            AFRODITY provides cutting-edge tools and services designed to help
            African artists monetize their talent and distribute their music
            globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="border-2 border-afrodity-green6 hover:border-primary transition-colors duration-300"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle className="text-xl text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
