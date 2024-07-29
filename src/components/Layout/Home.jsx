import { CarouselApp } from "../Carousel/carousel";
import { Trending } from "../Trending/trending";
import { useEffect, useState } from "react";
import axios from "axios";
import { Posts } from "../AllBlogs/postsApp";
import { MyButton } from "../Button";

export const Home = () => {
    const [articles, setArticles] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`)
            .then(response => {
                setArticles(response.data);
            })
    }, []);

    const handleClick = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    const buttonText = showAll ? "Show Less" : "Show More";

    return (
        <>
            <CarouselApp />
            <Trending articles={articles.slice(0, 4)} />
            <Posts articles={showAll ? articles : articles.slice(0, 9)} />
            <MyButton onClick={handleClick}>{buttonText}</MyButton>
        </>
    );
};
