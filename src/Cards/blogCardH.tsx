import Button from "@/components/button.tsx";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useState } from "react";

interface BlogCardProps {
    imageSrc: string;
    title: string;
    description: string;
    timeAgo?: string;
    author: string;
}

const BlogCardH = ({
                       imageSrc,
                       author,
                       title,
                       description,
                       timeAgo = "12h Ago",
                   }: BlogCardProps) => {
    const [liked, setLiked] = useState(false);

    return (
        <article
            className="min-w-[200px] max-w-[518px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px]
                        h-[134px] md:h-[150px] lg:h-[160px] xl:h-[170px] 2xl:h-[180px]
                        bg-white rounded-md flex p-2 m-1 shadow-md font-[Inter] z-20"
        >
            <img
                src={imageSrc}
                alt={'Blog Image'}
                className="w-[122px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[200px]
                           h-[118px] md:h-[135px] lg:h-[145px] xl:h-[155px] 2xl:h-[165px]
                           rounded-sm object-cover"
            />

            <section className="p-[5px] w-full flex flex-col justify-between">
                <div className='flex justify-between w-full overflow-hidden'>
                    <h3 className="text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]
                                 font-semibold text-[#1C1C1C] w-[83%]">
                        {title.length > 120 ? title.substring(0, 120) + '...' : title}
                    </h3>
                    <p className='text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-gray-500'>{timeAgo}</p>
                </div>

                <div className='w-[85%] overflow-hidden'>
                    <p className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] text-gray-500">
                        {description.length > 140 ? description.substring(0, 140) + '...' : description}
                    </p>
                </div>

                <div className="w-full flex justify-between items-center">
                    <p className='text-white text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] px-1 bg-gradient-primary rounded-full'>
                        {author}
                    </p>
                    <div className='flex justify-between items-center gap-1'>
                        {liked ? (
                            <FaHeart onClick={() => setLiked(!liked)} className="cursor-pointer" />
                        ) : (
                            <FaRegHeart onClick={() => setLiked(!liked)} className="cursor-pointer" />
                        )}
                        <Button
                            className='bg-blue-1 flex items-center rounded-full px-2 cursor-pointer'
                            titleStyle='text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px]'
                            title='Read More'
                        />
                    </div>
                </div>
            </section>
        </article>
    );
};

export default BlogCardH;
