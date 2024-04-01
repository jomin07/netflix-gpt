import { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () => {
    const searchText = useRef(null);

    const handleGptSearchClick = async () =>{
        console.log(searchText.current.value);

        const gptQuery = "Act as a Movie recommendation system for the query : " + searchText.current.value + ". Only give me names of five movies separated with comma, like the examle result given ahead. Example: Yeh Jawaani Hai Deewani,The Godfather,Dangal,Pursuit of Happiness,Shutter Island."

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        
        console.log(gptResults.choices);
    }

    return (
        <div className="pt-36 flex justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="bg-black w-1/2 grid grid-cols-12">
                <input ref={searchText} className="col-span-10 p-3 m-4" type="text" placeholder="What should we watch today?"></input>
                <button onClick={handleGptSearchClick} className="col-span-2 py-2 px-4 m-4 bg-red-700 text-white font-bold">Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar;
