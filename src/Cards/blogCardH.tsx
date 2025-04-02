import Button from "@/components/button.tsx";

interface BlogCardProps {
    imageSrc: string;
    title: string;
    description: string;
    timeAgo?: | string | "12h Ago";
    author: string;
}

const BlogCardH = ({
                      imageSrc,
                      author,
                      title,
                      description,
                      timeAgo,
                  }: BlogCardProps) => {

    return (
        <article
            className=" min-w-[200px] max-w-[518px] h-[134px] bg-white rounded-md flex p-2 m-1  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] font-[Inter] z-20"

        >
                <img
                    src={imageSrc}
                    alt={'imageAlt'}
                    className="w-[122px] h-[111px] object-cover"
                />

            <section className="p-[16px]">
                <div className={'h-[39px]'}>
                    <h3 className="text-[14px] font-semibold text-[#1C1C1C] ">
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
                    <div className="flex justify-between items-center">
                        <p className={'text-secondary font-normal'}>{author}</p>
                        <Button titleStyle={'font-mono'} title={'Read More'}/>
                    </div>

                </div>
            </section>
        </article>
    );
};

export default BlogCardH;
