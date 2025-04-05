function CreatePost() {
    return (
        <div className="mt-16 max-md:mt-10 px-4">
            <section className="flex flex-col md:flex-row items-center justify-center gap-6 pb-10 ">
                <div className="md:w-1/2 flex justify-center semi_round_image bg-blue-1 overflow-hidden">
                    <img
                        className=" w-full max-w-lg md:max-w-none"
                        src={'./write_article.jpeg'}
                        alt="Write Article"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="float-right text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-zinc-900">
                        Write Your <span className="text-blue-500">Article</span> Here
                    </h1>
                </div>

            </section>
        </div>
    );
}

export default CreatePost;
