import { useState, useEffect } from "react";
import { CarouselContent } from "./carouselContent";

const SvgNext = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#696A75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>
const SvgBack = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#696A75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/></svg>

export const CarouselApp = ({ articles }) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const leftClick = () => {
    setTransitioning(true);
    setCurrent((prev) => (prev > 0 ? prev - 1 : articles.length - 1));
  };

  const rightClick = () => {
    setTransitioning(true);
    setCurrent((prev) => (prev < articles.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  if (articles.length === 0) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className={`flex transition-transform duration-300 ease-in-out ${transitioning ? "transform" : ""}`}style={{ transform: `translateX(-${current * 100}%)` }}>
          {articles.map((article, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <CarouselContent bgPhoto={article.social_image} title={article.title} date={article.date}/>
            </div>
          ))}
        </div>
        <div className="absolute right-0 mt-2">
          <button onClick={leftClick}>{SvgBack}</button>
          <button onClick={rightClick}>{SvgNext}</button>
        </div>
      </div>
    </div>
  );
};
