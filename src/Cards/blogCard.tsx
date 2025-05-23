import Button from "@/components/button.tsx";

interface BlogCardProps {
    imageSrc: string;
    title: string;
    description: string;
    timeAgo?: | string | "12h Ago";
    author: string;
}

const BlogCard = ({
                      imageSrc,
    author,
                      title,
                      description,
                      timeAgo,
                  }: BlogCardProps) => {

    return (
        <article
            className=" min-w-[200px] max-w-[280px] h-96 bg-white rounded-md overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] font-[Inter] z-20"

        >
            <header className="relative">
                <img
                    src={imageSrc}
                    alt={'imageAlt'}
                    className="w-full h-64 object-cover"
                />
            </header>

            <section className="p-[16px]">
                <div className={'h-[39px]'}>
                    <h3 className="text-[14px] font-semibold text-[#1C1C1C] mb-[8px]">
                        {title}
                    </h3>
                </div>

                <div className={'h-[37px] overflow-hidden'}>
                    <p className="text-[12px] text-gray-500 mb-[16px]">{description}</p>

                </div>


                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[4px]">
                        <time className="text-[10px] text-[#42424264]">{timeAgo}</time>
                    </div>
                    <div className="flex  w-full justify-between items-center">
                        <p className='text-white text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] px-1 bg-gradient-primary rounded-full'>
                            {author}
                        </p>
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

export default BlogCard;
