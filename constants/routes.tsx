import Home from "@/Screen/Home/Home.tsx"; // Ensure this is imported first
import ForYouPage from "@/Screen/Article/ForYouPage.tsx";
import About from "@/Screen/About Us/About.tsx";
import Contact from "@/Screen/Contact Us/Contact.tsx";
import ArticleTopics from "@/Screen/Home/ArticleTopics.tsx";
import CreatePost from "@/Screen/Home/CreatePost.tsx";
// import ImageUploader from "@/components/imgUpload.tsx";
import MyArticles from "@/Screen/MyArticles/MyArticles.tsx";
import NewArticle from "@/Screen/MyArticles/NewArticle.tsx";

export const Home_Section1_Components = [
    { element: <CreatePost/>, name: 'Create Post' },
    {element: <ArticleTopics />, name: 'Article Topics' },
    // {element: <ImageUploader/>, name: 'Image Uploader' },
];

export const Screen_Routes = [
    { path: '*', element: <Home /> },
    { path: '/article', element: <ForYouPage /> },
    {path: '/myArticles', element: <MyArticles /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    // {path:'/upload', element: <ImageUploader/> },
    {path: '/new', element: <NewArticle submitButtonTitle={"Post"}/> },
];
