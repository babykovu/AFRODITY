"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export function SignupForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    artistName: "",
    genre: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="signup"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4cf42a_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔗 Ready to Elevate Your Career?
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Sign up today and turn your music into a profitable global success
            with AFRODITY. The future of African music monetization starts NOW!
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-0 bg-white/10 backdrop-blur-md">
            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mb-4 text-primary text-5xl">🎉</div>
                  <h3 className="text-2xl font-bold">Thank You for Joining!</h3>
                  <p className="text-gray-300">
                    Your application has been received. We'll be in touch soon
                    to help you start your journey with AFRODITY.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-0 text-white placeholder:text-gray-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-0 text-white placeholder:text-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="artistName">Artist/Band Name</Label>
                    <Input
                      id="artistName"
                      name="artistName"
                      value={formState.artistName}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-0 text-white placeholder:text-gray-400"
                      placeholder="Your artist or band name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="genre">Primary Music Genre</Label>
                    <Input
                      id="genre"
                      name="genre"
                      value={formState.genre}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-0 text-white placeholder:text-gray-400"
                      placeholder="e.g. Afrobeats, Amapiano, etc."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Join the Movement"}
                  </Button>

                  <p className="text-xs text-gray-400 text-center pt-2">
                    By signing up, you agree to our Terms of Service and Privacy
                    Policy
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
