const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-64 px-12 text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-2 font-normal w-1/4">{overview}</p>
      <div className="flex my-2">
          <button className="bg-white py-4 px-10 text-black text-xl rounded-md hover:opacity-80">Play</button>
          <button className="bg-gray-500 py-4 px-8 text-white text-xl ml-4 rounded-md hover:opacity-80"> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
