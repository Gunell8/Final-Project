import { About } from "../Pages/site/About/About";
import { Blog } from "../Pages/site/Blog/Blog";
import { Contact } from "../Pages/site/Contact/Contact";
import { Detail } from "../Pages/site/Detail/Detail";
import { Event } from "../Pages/site/Event/Event";
import { Gallery } from "../Pages/site/Gallery/Gallery";
import { Home } from "../Pages/site/Home/Home";
import { Projects } from "../Pages/site/Projects/Projects";
import { Shop } from "../Pages/site/Shop/Shop";
import { MainRoot } from "../components/site/MainRoot";

export const Router = [
    {
        path: "",
        element: <MainRoot />,
        children:
            [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/gallery",
                    element: <Gallery/>
                },
                {
                    path: "/event",
                    element: <Event/>
                },
                {
                    path: "/contact",
                    element: <Contact/>
                },
                {
                    path: "/blog",
                    element: <Blog/>
                },
                {
                    path: "/shop",
                    element: <Shop/>
                },
                {
                    path: "/projects",
                    element: <Projects/>
                },
                {
                    path:"/shop/:id",
                    element:<Detail/>
                }
            ]

    }
]