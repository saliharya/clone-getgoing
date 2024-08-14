import Quote from "@/components/atoms/Quote";
import Carousel from "@/components/organisms/Carousel";
import Feature from "@/components/organisms/Feature";
import Popular from "@/components/organisms/Popular";
import PopularCity from "@/components/organisms/PopularCity";

export default function Home() {
  return (
    <>
      <div className="mb-8">
        <Carousel />
      </div>
      <div className="mb-8 pl-8">
        <Popular />
      </div>
      <Quote text={
        <>
          “Better to <span className="text-red-500">SEE</span> <span className='text-black'>something once than hear about it</span>
          <span className="text-blue-500"> A THOUSAND TIMES</span>”
        </>
      }
        author="-Asian Proverb" />
      <div className="mb-8 pl-32">
        <Feature />
      </div>
      <div className="mb-8 pl-8">
        <PopularCity />
      </div>
      <Quote text={
        <>
          Kata <span className="text-red-500">Mereka</span>
        </>
      }
        author="Cerita dari mereka yang telah menjelajahi Eropa bersama kami" />
    </>
  );
}
