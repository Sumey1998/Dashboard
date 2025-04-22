import { useContext, useState } from "react"
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import CloseIcon from '@mui/icons-material/Close';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";
import { MyContext } from "../../context/DarkModeContext";
import React, { useRef } from 'react';

const Sidepanel = () => {

    const [paneltoggle, setPanelToggle] = useState(true);
    const toggel = () => {
        setPanelToggle(prev => !prev);
        console.log(paneltoggle);
    }

    const {isDark, setIsDark} = useContext(MyContext);

    const [selected, setSelected] = useState(1);

    return(
        <section className={` ${ !paneltoggle ? "items-center" : 'basis-2xs' }  bg-slate-900 flex flex-col text-white py-5 px-3`}>
            <div className='flex-none'>
                <div className='flex justify-between items-center'>
                    {paneltoggle ? <h1 className='text-2xl font-bold'>Dashboard</h1> : ""}
                    <button onClick={() => toggel()}>
                        {paneltoggle ? <CloseIcon className='cursor-pointer'/> : <KeyboardArrowRightIcon className="cursor-pointer"/> }
                    </button>
                </div>
                <div className='flex pt-6 gap-3'>
                    <img src="profile.jpg" alt="profile" className={ paneltoggle ? 'h-10 w-10 rounded-full object-cover' : "h-7 w-7 rounded-full object-cover'"}/>
                    {paneltoggle ?
                        <div>
                            <h5>Henry kelien</h5>
                            <p className='text-[0.8rem] text-slate-400'>Adminstrator</p>
                        </div>
                    : ""}
                </div>
            </div>
            <ul className='pt-6 flex-1 flex flex-col gap-5'>
                <li onClick={() => setSelected(() => 1)}>
                    <Link to="/" className={`flex gap-3 cursor-pointer ${ selected == 1 ? 'bg-gray-500 p-2' : 'hover:bg-gray-500 p-2'}`}>
                        <HomeIcon/>
                        {paneltoggle ? <p>Home</p>: ""}
                    </Link>
                </li>
                <li onClick={() => setSelected(() => 2)}>
                    <Link to="/client" className={`flex gap-3 cursor-pointer ${ selected == 2 ? 'bg-gray-500 p-2' : 'hover:bg-gray-500 p-2'}`}>
                        <GroupIcon/>
                        {paneltoggle ? <p>Client</p>: ""}
                    </Link>
                    {/* <Link>
                        <GroupIcon/>
                        {paneltoggle ? <p>Client</p>: ""}
                    </Link> */}
                </li>
            </ul>
            <div className='flex gap-3 items-center '>
                {/* <ToggleOffIcon style={{"height" : "2.2rem", "width" : "2.2rem"}}/> */}
                <button className="flex gap-1 border-1 border-slate-600 rounded-4xl p-1 cursor-pointer" onClick={() => setIsDark(prev => !prev)}>
                    <BrightnessHighIcon  style={{"height" : "1.2rem", "width" : "1.2rem"}} className={isDark ? "text-gray-600": ""}/>
                    <BedtimeIcon style={{"height" : "1.2rem", "width" : "1.2rem"}} className={ !isDark ? "text-gray-600": ""}/>
                </button>
                {paneltoggle ? <p>Dark Theme</p>: ""}
            </div>
        </section>
    )
}

export default Sidepanel