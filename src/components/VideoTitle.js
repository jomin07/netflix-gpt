const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-32 md:pt-64 px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:font-bold md:text-6xl">{title}</h1>
      <p className="hidden md:inline-block py-2 font-normal w-1/4">{overview}</p>
      <div className="flex my-2">
          <button className="bg-white py-2 md:py-4 px-6 md:px-10 text-black text-base md:text-xl rounded-md hover:opacity-80">Play</button>
          <button className="bg-gray-500 py-2 md:py-4 px-4 md:px-8 text-white text-base md:text-xl ml-4 rounded-md hover:opacity-80"> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
