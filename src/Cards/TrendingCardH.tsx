
interface BlogCardProps {
    imageSrc: string;
    title: string;
    timeAgo?: string;
    author: string;
}

const TrendingCardH = ({
                       imageSrc,
                       author,
                       title,
                       timeAgo = "12h Ago",
                   }: BlogCardProps) => {

    return (
        <article
            className="min-w-[280px] h-[74px]
                        bg-white rounded-md flex p-1 m-1 shadow-md font-[Inter] z-20"
        >
            <img
                src={imageSrc}
                alt={'Blog Image'}
                className="w-[122px]
                           rounded-sm object-cover"
            />

            <section className="p-[5px] w-full flex flex-col justify-between">
                    <h3 className="text-[11px]
                                 font-semibold text-[#1C1C1C] w-full">
                        {title.length > 120 ? title.substring(0, 120) + '...' : title}
                    </h3>

                <div className="w-full flex justify-between items-center">
                    <p className='text-white text-[9px]  px-1 bg-gradient-primary rounded-full'>
                        {author}
                    </p>
                    <p className='text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-gray-500'>{timeAgo}</p>

                </div>
            </section>
        </article>
    );
};

export default TrendingCardH;
