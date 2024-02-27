import React from "react";
import Logo from "./Logo";
import Navigation from "../Pages/Navigation";




export default function TopMenu(){
    return(
            <div className='h-40 w-full bg-red-500 pl-5 pt-3 relative'>
            <Logo/>
            <Navigation/>

            </div>
        
    )
    
}