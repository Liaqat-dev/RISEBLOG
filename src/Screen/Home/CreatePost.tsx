
function CreatePost() {
    return (<div className={'mt-16  max-md:mt-10 max-md:max-w-screen'}>
            <section className="flex w-full  justify-center items-center gap-2 pb-10 max-md:flex-col max-md:items-center">
                <div className={'flex w-[33%] max-sm:flex-col md:flex-row  '}>
                    <h1 className="float-right text-8xl font-semibold text-zinc-900  max-md:text-center  max-md:max-w-full max-md:text-3xl max-lg:text-5xl max-xl:text-6xl max-2xl:text-7xl">
                        Write Your <span className={'text-blue-500'}> Article </span> Here
                    </h1>
                     <img className={'float-right max-md:semi_round_image '} width={650} height={450} src={'./write_article.jpeg'} alt={''}/>
                </div>
            </section>

        </div>

    );
}

export default CreatePost;