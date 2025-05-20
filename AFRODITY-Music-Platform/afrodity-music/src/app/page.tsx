import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Platforms } from "@/components/Platforms";
import { Testimonials } from "@/components/Testimonials";
import { SignupForm } from "@/components/SignupForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Features />
      <Testimonials />
      <About />
      <SignupForm />
    </>
  );
}
