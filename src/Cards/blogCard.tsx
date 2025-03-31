interface BlogCardProps {
    imageSrc: string;
    title: string;
    description: string;
    timeAgo?: | string | "12h Ago";
}

const BlogCard = ({
                      imageSrc,
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

                    <button
                        className="px-[16px] py-[8px] bg-[#3652E1] text-white text-[12px] font-semibold rounded-[21px]"
                        // onClick={onReadMoreClick}
                    >
                        Read More
                    </button>
                </div>
            </section>
        </article>
    );
};

export default BlogCard;
