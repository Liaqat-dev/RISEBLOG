import {blogCategories} from "../../../constants/categoryCards.ts";
import SearchForm from "@/components/searchForm.tsx";
import topicsDaily from "../../../constants/topicsDaily.ts";
import BlogCardH from "@/Cards/blogCardH.tsx";
import TrendingCardH from "@/Cards/TrendingCardH.tsx";
import Button from "@/components/button.tsx";
import {useNavigate} from "react-router";

function MyArticles() {
    const navigate = useNavigate();
    const myArticle=[...topicsDaily]
    const categories = blogCategories.map(category => category.name);
    categories.unshift("All")


    return <div className={'  min-w-0 bg-white w-screen mt-10 mx-auto mx-1 max-w-6xl h-[calc(100vh-8rem)]'}>
        <div className="flex flex-col gap-2 p-2 my-1">
            <h2 className={'text-4xl text-secondary font-bold italic'}>My Articles</h2>
            <div className={'flex gap-3'}>
                <SearchForm/>
                <Button  title={'+ New Article'} onClick={ ()=>navigate('/new')}/>

            </div>

        </div>
        <div className={'flex max-lg:gap-3 gap-9 '}>
            <section className={'min-w-0 flex-[2] bg-white-1 max-w-[600px]  rounded-md px-2 '}>
                <div className={''}>
                    {
                        myArticle.map((topic, index) => (
                            <BlogCardH key={index} title={topic.title} author={topic.author} description={topic.meta}
                                       imageSrc={topic.thumbnail}/>
                        ))
                    }
                </div>
            </section>
            {/*Trending*/}
            <section className={'min-w-0 flex-[1] p-1 pt-2 max-w-[400px] h-[27rem] rounded-md bg-white-1 max-md:hidden'}>
                <h2 className={'font-bold italic text-[13px]'}>Popular</h2>{
                topicsDaily.slice(2,5).map((topic, index) => (
                    <TrendingCardH key={index} imageSrc={topic.thumbnail} title={topic.title} author={topic.author}/>
                ))
            }

            </section>


        </div>

    </div>
}

export default MyArticles;