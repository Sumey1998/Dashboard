import { MyContext } from "../../context/DarkModeContext";
import { useContext } from "react";

const Client = () => {
    const { isDark, setIsDark } = useContext(MyContext);
    return (
        <section className="flex-10 px-5 gap-5 flex flex-col">
            {isDark ? <h1 className="text-2xl font-bold text-white"> Client component</h1> : 
            <h1 className="text-2xl font-bold"> Client component</h1> }
        </section>
    )
}

export default Client;