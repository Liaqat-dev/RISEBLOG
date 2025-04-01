import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel.tsx"
import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import topicsDaily from "../../../constants/topicsDaily.ts";

import BlogCard from "@/Cards/blogCard.tsx";

function CarouselSize() {
    const plugin = useRef(
        Autoplay({delay: 2000, stopOnInteraction: false, active: true})
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "center",
                loop: true,
            }}
            className="w-full pl-2 ">
            <CarouselContent>
                {topicsDaily.map((topic, index) => (
                    <CarouselItem key={index}
                                  className={' p-5 sm:basis-1/2 md:basis-1/2  lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5'}>
                        <BlogCard key={index} title={topic.title} imageSrc={topic.thumbnail} description={topic.meta} author={topic.author}/>
                    </CarouselItem>
                ))
                }</CarouselContent>
        </Carousel>
    )
}


const DailyArticles = () => {
    return (
        <div className={'bg-blue-1 flex justify-center items-center   h-[100vh]   max-md:max-w-screen max-md:pb-32'}>
            <section
                className="flex  w-full  justify-center items-center gap-2 pb-10 max-md:flex-col max-md:items-center">
                <div className="max-lg:w-[28%]  lg:w-[20%]  max-md:w-full z-10">
                    <h1 className="text-8xl font-semibold text-zinc-900  max-md:text-center  max-md:max-w-full max-md:text-3xl max-lg:text-5xl max-xl:text-6xl max-2xl:text-7xl">
                        Best <span className={'text-blue-500'}> Posts </span> Today
                    </h1>
                </div>
                <div className="ml-5 w-[70%]   max-md:mx-auto max-sm:max-w-[280px]   ">
                    <div className="flex   items-center justify-center   max-md:mt-5 ">
                        <CarouselSize/>
                    </div>
                </div>
            </section>
            <br/>
        </div>

    );
};

export default DailyArticles;
