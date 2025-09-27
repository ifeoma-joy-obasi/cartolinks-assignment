import GenerateSection from "./components/GenerateSection";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/ui/carousel/Carousel";

// card components from generate/cards
import CardImage1 from "./components/generate/cards/CardImage1";
import CardImage2 from "./components/generate/cards/CardImage2";
import CardImage3 from "./components/generate/cards/CardImage3";
import CardImage4 from "./components/generate/cards/CardImage4";
import CardImage5 from "./components/generate/cards/CardImage5";
import CardImage6 from "./components/generate/cards/CardImage6";
import CardImage7 from "./components/generate/cards/CardImage7";
import CardImage8 from "./components/generate/cards/CardImage8";
import Footer from "./components/Footer";

const items = [
  { id: 1, content: <CardImage1 /> },
  { id: 2, content: <CardImage2 /> },
  { id: 3, content: <CardImage3 /> },
  { id: 4, content: <CardImage4 /> }, // can reuse components
  { id: 5, content: <CardImage5 /> },
  { id: 6, content: <CardImage6 /> },
  { id: 7, content: <CardImage7 /> },
  { id: 8, content: <CardImage8 /> },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always on top */}
      <Navbar />

      {/* Page content grows to fill space */}
      <main className="flex-grow pt-16">
        {/* Carousel section */}
        <div className="mt-16 pl-4 sm:pl-6 lg:pl-8">
          <Carousel />
        </div>

        {/* Generate section */}
        <div className="mt-20 w-full md:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <GenerateSection items={items} collapsedCount={4} defaultOpen={false} />
        </div>
      </main>

      {/* Footer sticks at bottom */}
      <Footer />
    </div>
  );
}
