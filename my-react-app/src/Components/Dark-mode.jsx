
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


function Dark_mode() {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="bg-yellow">
            <button className=" flex justify-center border-2 w-20" onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny className="text-white" />

                }
                {
                    !dark && <IoMoon />
                }
            </button>
        </div>
    );
}

export default Dark_mode;