import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-24 md:w-48 px-2">
      <img alt="movieCard" src={IMG_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard;
