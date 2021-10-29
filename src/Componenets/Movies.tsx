import React, {useEffect, useState} from "react";
import {MovieDto} from "./Movie.model";
import data from "../data.json";
import {useSwipeable} from "react-swipeable";

const Movies = () => {

    const [movies, setMovies] = useState<MovieDto[]>();
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentMovie, setCurrentMovie] = useState<number>(0);

    const handlers = useSwipeable({
        onSwipedRight: _ => handleSwpR(),
        onSwipedLeft: _ => handleSwpL()
    })

    useEffect(() => {
        fetchData();
    })

    const fetchData = () => {
        setMovies(data);
        setIsLoaded(true);
    }

    const handleSwpR = () => {
        //send swiped right side info
        if((currentMovie+1)<movies!.length)
        setCurrentMovie(currentMovie + 1)
        else
            setCurrentMovie(0);
    }

    const handleSwpL = () => {
        //send swiped left side info
        if((currentMovie+1)<movies!.length)
            setCurrentMovie(currentMovie + 1)
        else
            setCurrentMovie(0);
    }


    return (

            isLoaded ?
                (
                    <div className="container p-2 bg-light" {...handlers}>
                        <h5>
                            {movies![currentMovie].title}
                            <span>
                                (
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="2 5 20 20"  fill="gold"><g><rect fill="none" height="24" width="24" x="0"/><path d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M12,2l-2.42,8H2 l6.17,4.41L5.83,22L12,17.31L18.18,22l-2.35-7.59L22,10h-7.58L12,2L12,2z"/></g></svg>
                                {movies![currentMovie].rating}
                                )
                            </span>

                        </h5>
                        <img alt="brak obrazu" className="img-thumbnail" src={movies![currentMovie].imageURL}/>
                        <p>{movies![currentMovie].summary}</p>

                        <div className="btn-group col-12">
                            <button onClick={handleSwpL} className="btn btn-danger mx-3 col-">{"Nope"}</button>
                            <button onClick={handleSwpR} className="btn btn-success mx-3">{"Yep"}</button>
                        </div>
                    </div>
                )
                :
                (<div>Loading</div>)
    )
}

export default Movies;