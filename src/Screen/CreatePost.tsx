
function CreatePost() {
    return (<div className={'mt-16  max-md:mt-10 max-md:max-w-full'}>
            <section className="flex w-full  justify-center items-center gap-2 pb-10 max-md:flex-col max-md:items-center">
                {/*<div className="max-lg:w-[28%]  lg:w-[20%] max-md:ml-0 max-md:w-full z-10">*/}
                <div className={'flex w-[35%] max-sm:flex-col md:flex-row  '}>
                    <h1 className="float-left text-8xl font-semibold text-zinc-900  max-md:text-center  max-md:max-w-full max-md:text-3xl max-lg:text-5xl max-xl:text-6xl max-2xl:text-7xl">
                        Write Your <span className={'text-blue-500'}> Article </span> Here
                    </h1>
                {/*</div>*/}
                {/*<div className="ml-5 w-[70%]   max-md:mx-auto max-sm:max-w-[280px]   ">*/}
                {/*    <div*/}
                {/*        className="flex   items-center justify-center   max-md:mt-5 ">*/}
                     <img className={'max-md: md:semi_round_image '} width={650} height={450} src={'./write_article.jpeg'} alt={''}/>
                    {/*</div>*/}
                </div>
            </section>

        </div>

    );
}

export default CreatePost;