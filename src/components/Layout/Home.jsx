import { CarouselApp } from "../Carousel/carousel"
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