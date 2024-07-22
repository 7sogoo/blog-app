import { Blog } from "../Blog/blog"
import { CarouselApp } from "../Carousel/carousel"
import { Footer } from "../Footer/footerApp"
import { Navbar } from "../navbar"
import { Posts } from "../Pos/postsApp"
import { Trending } from "../Trending/trending"

export const Home = () => {
    return (
        <>
            <CarouselApp/>
            <Trending/>
            <Posts/>
        </>
    )
}