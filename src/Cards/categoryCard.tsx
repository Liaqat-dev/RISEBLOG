interface CategoryProps {
    name: string;
    description: string;
    image: string;
}


const CategoryCard=({name, description, image}:CategoryProps) => {
    return (
        <article
            className="flex flex-col justify-end min-w-[200px] max-w-[280px] h-96 rounded-2xl overflow-hidden  rounded-md overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] font-[Inter]"
            style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}
        >

            {/* Text Content */}
            <div className=" left-0  h-18 bg-black opacity-75  text-white pl-2 pb-1.5">
                <h2 className="text-2xl font-bold"><em>{name}</em></h2>
                <p className="text-sm text-white-1 opacity-80"><em>{description}</em></p>
            </div>
        </article>
    );
};

export default CategoryCard;
