import SearchForm from "@/components/searchForm.tsx";
import {blogCategories} from "../../../constants/categoryCards.ts";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

import topicsDaily from "../../../constants/topicsDaily.ts";
import BlogCardH from "@/Cards/blogCardH.tsx";


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
        <div className="relative flex items-center">
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
                className="h-10 px-10 my-2 flex overflow-x-auto whitespace-nowrap px-2 no-scrollbar"
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


    return <div className={'flex justify-center h-screen mt-10 mx-auto gap-16 max-w-7xl'}>
        <section className={'flex-2/4 max-w-[600px] bg-white-1'}>
            <h2 className={'text-4xl text-secondary font-bold italic'}>For You</h2>
            <SearchForm/>
            {/*<CategoryScroller categories={categories} />*/}
            <div className={''}>
                {
                    topicsDaily.map((topic,index )=> (
                        <BlogCardH key={index} title={topic.title} author={topic.author}  description={topic.meta} imageSrc={topic.thumbnail}  />
                    ))
                }
            </div>
        </section>
        <section className={'flex-1/4 bg-gradient-primary max-lg:hidden'}>
            Rigth
        </section>
    </div>
}

export default ForYouPage;