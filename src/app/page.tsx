import Image from "next/image";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
    bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/test-home.jpg')" }}
    >
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/T4NT9_XDHkU?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
          allow="autoplay; fullscreen"
        ></iframe>
      </div> */}

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Navbar />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="[text-shadow:_0_8px_8px_rgb(0_0_0_/_0.8)] text-5xl md:text-6xl font-bold font-serif font-[futura-pt-book] drop-shadow-xs tracking-wider mb-6">
            Plan the perfect trip
          </h1>
        </div>
      </main>
    </div>
  );
}
