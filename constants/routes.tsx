import Home from "@/Screen/Home/Home.tsx"; // Ensure this is imported first
import ForYouPage from "@/Screen/Article/ForYouPage.tsx";
import About from "@/Screen/About Us/About.tsx";
import Contact from "@/Screen/Contact Us/Contact.tsx";
import ArticleTopics from "@/Screen/Home/ArticleTopics.tsx";
import CreatePost from "@/Screen/Home/CreatePost.tsx";

export const Home_Section1_Components = [
    { element: <CreatePost/>, name: 'Create Post' },
    {element: <ArticleTopics />, name: 'Article Topics' },
];

export const Screen_Routes = [
    { path: '*', element: <Home /> },
    { path: '/article', element: <ForYouPage /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> }
];
