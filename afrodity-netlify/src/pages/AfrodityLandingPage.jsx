import React from "react";
import Card from "../components/Card";

const memberships = [
  { title: "🎧 Free", description: "Basic music distribution and limited monetization tools.", cta: "Sign Up Free" },
  { title: "🚀 Pro", description: "Full monetization, advanced analytics, and marketing access.", cta: "Go Pro" },
  { title: "🔥 Grand Pro", description: "All Pro features + personal A&R, custom campaigns & VIP support.", cta: "Join Grand Pro" },
];

const features = [
  { title: "💰 Earn More, Stress Less", text: "Let your creativity flow—we handle the business side for you. Maximize revenue from streams, downloads, and royalties." },
  { title: "📢 Marketing That Works", text: "Opt for strategic campaigns like playlist placements, social promotions, and customized visibility boosts." },
  { title: "🎵 Your Music, Your Success", text: "Whether you're emerging or established, AFRODITY equips you with tools for growth in the digital era." },
  { title: "🌍 Rooted in Kenya", text: "Founded by Ayub Roosevelt Ngala, AFRODITY is made by Africans for Africa—infused with the continent’s vibrant energy." },
];

export default function AfrodityLandingPage() {
  return (
    <div className="bg-[#e8fee3] text-black font-sans">
      <header className="bg-[#30e40c] p-6 text-center text-white">
        <h1 className="text-3xl font-bold">AFRODITY</h1>
        <p className="text-lg">Where African Music Meets Global Success</p>
      </header>

      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold">Monetize. Distribute. Elevate.</h2>
        <p className="mt-2 max-w-2xl mx-auto">
          Welcome to AFRODITY, the revolutionary record label empowering African artists to monetize their talent and distribute their music globally—effortlessly.
        </p>
        <a href="#membership" className="cta">🚀 Join the Movement</a>
      </section>

      <section className="p-8 grid md:grid-cols-2 gap-6 justify-items-center">
        {features.map((feature, idx) => (
          <Card key={idx} title={feature.title} text={feature.text} />
        ))}
      </section>

      <section id="membership" className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-6">Membership Plans</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {memberships.map((plan, idx) => (
            <Card key={idx} title={plan.title} text={plan.description} cta={plan.cta} />
          ))}
        </div>
      </section>

      <footer className="bg-[#30e40c] text-white text-center py-4">
        <p>&copy; 2025 AFRODITY. Built to elevate African music.</p>
      </footer>

      <style jsx>{`
        .cta {
          display: inline-block;
          background-color: #4cf42a;
          padding: 0.75rem 1.5rem;
          color: black;
          text-decoration: none;
          border-radius: 8px;
          margin-top: 1rem;
          font-weight: bold;
        }
        .card {
          background-color: #bafbad;
          border-radius: 12px;
          padding: 1.5rem;
          max-width: 300px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        #membership .card {
          background-color: #95f882;
        }
      `}</style>
    </div>
  );
}
