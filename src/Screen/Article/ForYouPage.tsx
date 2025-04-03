import SearchForm from "@/components/searchForm.tsx";
import {blogCategories} from "../../../constants/categoryCards.ts";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

import topicsDaily from "../../../constants/topicsDaily.ts";
import BlogCardH from "@/Cards/blogCardH.tsx";
import TrendingCardH from "@/Cards/TrendingCardH.tsx";


interface Props {
    categories: string[];
}
function CategoryScroller({ categories}:Props) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 100;
            scrollRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative mx-1 flex items-center max-sm:w-screen">
            {/* Left Scroll Button */}
            <button
                className="absolute left-0 z-10 bg-white-1 p-2  shadow-md"
                onClick={() => scroll("left")}
            >
                <FaArrowLeft className={'text-secondary'} size={20} />
            </button>

            {/* Scrollable Category List */}
            <div
                ref={scrollRef}
                className="h-10 px-10  my-2 flex overflow-x-auto whitespace-nowrap px-2 no-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {categories.map((category, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-200 rounded-lg mx-1 cursor-pointer">
                        {category}
                    </span>
                ))}
            </div>

            <button
                className="absolute right-0 z-10 bg-white-1  p-2  shadow-md"
                onClick={() => scroll("right")}
            >
                <FaArrowRight  className={'text-secondary'} size={20} />
            </button>
        </div>
    );
}



function ForYouPage() {
    const categories = blogCategories.map(category => category.name);
    categories.unshift("All")


    return <div className={'min-w-0 bg-white w-screen mt-10 mx-auto mx-1 max-w-6xl'}>
        <div className="flex flex-col gap-2 p-2 my-1">
            <h2 className={'text-4xl text-secondary font-bold italic'}>For You</h2>
            <SearchForm/>
        </div>
        <div className={'flex max-lg:gap-3 gap-9 '}>
            <section className={'min-w-0 flex-[2] bg-white-1 max-w-[600px]  rounded-md px-2 '}>
                <CategoryScroller categories={categories}/>
                <div className={''}>
                    {
                        topicsDaily.map((topic, index) => (
                            <BlogCardH key={index} title={topic.title} author={topic.author} description={topic.meta}
                                       imageSrc={topic.thumbnail}/>
                        ))
                    }
                </div>
            </section>
            <section className={'min-w-0 flex-[1] p-1 pt-2 max-w-[400px] h-[27rem] rounded-md bg-white-1 max-md:hidden'}>
                <h2 className={'font-bold italic text-[13px]'}>Trending</h2>{
                topicsDaily.slice(2,5).map((topic, index) => (
                    <TrendingCardH key={index} imageSrc={topic.thumbnail} title={topic.title} author={topic.author}/>
                ))
            }

            </section>


        </div>

    </div>
}

export default ForYouPage;