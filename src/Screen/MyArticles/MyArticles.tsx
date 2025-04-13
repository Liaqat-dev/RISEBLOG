import {blogCategories} from "../../../constants/categoryCards.ts";
import SearchForm from "@/components/searchForm.tsx";
import topicsDaily from "../../../constants/topicsDaily.ts";
import BlogCardH from "@/Cards/blogCardH.tsx";
import TrendingCardH from "@/Cards/TrendingCardH.tsx";
import Button from "@/components/button.tsx";
import {useNavigate} from "react-router";
import {useUser} from "../../../context/UserContext/useUser.ts";
import {SignIn} from "@/api/api_routes.ts";

function MyArticles() {
    const {user}=useUser()
    const navigate = useNavigate();
    const myArticle=[...topicsDaily]
    const categories = blogCategories.map(category => category.name);
    categories.unshift("All")
    if(user){
        return <div className={'  min-w-0 bg-white w-screen mt-10 mx-auto mx-1 max-w-6xl h-[calc(100vh-4rem)]'}>
            <div className="flex flex-col gap-2 p-2 my-1">
                <h2 className={'text-4xl text-secondary font-bold italic'}>My Articles</h2>
                <div className={'flex gap-3'}>
                    <SearchForm/>
                    <Button  title={'+ New Article'} onClick={ ()=>navigate('/new')}/>

                </div>

            </div>
            <div className={'flex max-lg:gap-3 gap-9 '}>
                <section className={'min-w-0 flex-[2] bg-white-1 max-w-[600px]  rounded-md px-2 max-sm:mb-14'}>
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
    else {
        return <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-2xl font-semibold mb-4">You're not logged in</h1>
            <p className="text-gray-600 mb-6">Please log in to view your articles.</p>
            <button
                onClick={()=> {
                   SignIn();
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
                Sign In
            </button>
        </div>
    }

}

export default MyArticles;