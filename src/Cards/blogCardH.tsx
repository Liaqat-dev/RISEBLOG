import Button from "@/components/button.tsx";
import {FaHeart, FaRegHeart} from "react-icons/fa6";
import {useState} from "react";


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
            className=" min-w-[200px] max-w-[518px] h-[134px] bg-white rounded-md flex p-2 m-1  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] font-[Inter] z-20"

        >
            <img
                src={imageSrc}
                alt={'imageAlt'}
                className="w-[122px] h-[118px] rounded-sm object-fill"
            />

            <section className="p-[11px] w-full flex flex-col justify-between ">
                <div className={'  flex justify-between  overflow-hidden'}>
                    <h3 className="text-[11px] w-[85%] font-semibold text-[#1C1C1C] ">
                        {title.substring(0, 120)}
                    </h3>
                    <p className={'text-[9px] text-gray-500'}>{timeAgo}</p>
                </div>

                <div className={' bg-red-950 w-[85%] overflow-hidden'}>
                    <p className="text-[10px] text-gray-500 ">{description.substring(0, 140) + '...'}</p>

                </div>



                    <div className="w-full flex justify-between items-center">
                        <p className={'text-secondary text-[10px] px-1 bg-gradient-primary rounded-full'}>{author}</p>
                        <div className={'flex justify-between items-center gap-1'}>
                            {liked ?
                                <FaHeart onClick={() => setLiked(!liked)}/>
                                : <FaRegHeart onClick={() => setLiked(!liked)}/>
                            }
                            <Button className={'bg-blue-1 flex items-center rounded-full px-2 cursor-pointer'}
                                    titleStyle={'text-[10px] '} title={'Read More'}/>
                        </div>

                    </div>
            </section>
        </article>
    );
};

export default BlogCardH;
