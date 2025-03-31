
import DailyArticles from "@/Screen/DailyArticles.tsx";
import ArticleTopics from "@/Screen/ArticleTopics.tsx";
import CreatePost from "@/Screen/CreatePost.tsx";

export const Home_Routes = [
    { path: '/CreatePost', element: <CreatePost/>, name: 'Create Post' },
    { path: '/DailyArticles', element: <DailyArticles />, name: 'Daily Articles' },
    { path: '/ArticleTopics', element: <ArticleTopics />, name: 'Article Topics' },

];
