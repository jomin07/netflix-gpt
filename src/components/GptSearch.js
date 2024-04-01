import { BACKGROUND_URL } from "../utils/constants"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
          <img src={BACKGROUND_URL} alt='img'></img>
      </div>
      <GptSearchBar />
      GptSearchPage
    </div>
  )
}

export default GptSearch
