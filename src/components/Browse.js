import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies"; 
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> : 
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
      }
      
      
    </div>
  )
}

export default Browse;
