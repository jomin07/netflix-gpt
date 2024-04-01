import { BACKGROUND_URL } from "../utils/constants"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <>
      <div className='absolute -z-10'>
          <img className="h-screen object-cover md:w-screen" src={BACKGROUND_URL} alt='img'></img>
      </div>
      <div className="">
        <GptSearchBar />
      </div>
    </>
  )
}

export default GptSearch
