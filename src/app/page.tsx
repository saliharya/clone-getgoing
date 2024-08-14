import Quote from "@/components/atoms/Quote";
import Carousel from "@/components/organisms/Carousel";
import Feature from "@/components/organisms/Feature";
import Popular from "@/components/organisms/Popular";
import PopularCity from "@/components/organisms/PopularCity";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <div className="bg-white rounded-lg overflow-hidden">
        <Carousel />
      </div>

      <div className="bg-white rounded-lg p-6">
        <Popular />
      </div>

      <Quote
        text={<>“Better to <span className="text-red-500 font-semibold">SEE</span> something once than hear about it <span className="text-blue-500 font-semibold">A THOUSAND TIMES</span>”</>}
        author="- Asian Proverb"
        className="text-center text-lg font-medium text-gray-700"
      />

      <div className="bg-white rounded-lg p-6">
        <Feature />
      </div>

      <div className="bg-white rounded-lg p-6">
        <PopularCity />
      </div>

      <Quote
        text={<>Kata <span className="text-red-500 font-semibold">Mereka</span></>}
        author="Cerita dari mereka yang telah menjelajahi Eropa bersama kami"
        className="text-center text-lg font-medium text-gray-700"
      />
    </div>
  );
}
