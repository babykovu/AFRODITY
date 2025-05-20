export function Platforms() {
  const platforms = [
    { name: "Spotify", logo: "/spotify.svg" },
    { name: "Apple Music", logo: "/apple-music.svg" },
    { name: "Amazon Music", logo: "/amazon-music.svg" },
    { name: "Tidal", logo: "/tidal.svg" },
    { name: "YouTube Music", logo: "/youtube-music.svg" },
    { name: "Deezer", logo: "/deezer.svg" },
  ];

  return (
    <section className="py-12 bg-afrodity-green6/50">
      <div className="container">
        <h2 className="text-center text-xl md:text-2xl font-medium mb-8">
          Distribute Your Music to the World's Top Platforms
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16 opacity-80">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs">{platform.name}</span>
              </div>
              <span className="text-sm mt-2">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
