import Quote from "@/components/atoms/Quote";
import Carousel from "@/components/organisms/Carousel";
import Popular from "@/components/organisms/Popular";

export default function Home() {
  return (
    <>
      <div className="mb-8">
        <Carousel />
      </div>
      <div className="mb-8 pl-8">
        <Popular />
      </div>
      <Quote />
    </>
  );
}
