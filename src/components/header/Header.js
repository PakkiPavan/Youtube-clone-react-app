import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory } from "react-router";
import { useSelector } from "react-redux";


const Header=({handleToggleSidebar})=>{
    const [input,setInput] = useState("");
    const history = useHistory();
    const handleSubmit = (event)=>{
        event.preventDefault();
        history.push(`/search/${input}`);
    }
    let photoURL = null;
    let temp = useSelector(state=>state.auth);
    if(temp && temp.user && temp.user.photoURL){
        photoURL=temp.user.photoURL;
    }
    return(
        <div className="header">
            <FaBars 
                className="header__menu"
                size={26}
                onClick={()=>handleToggleSidebar()}
            />
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className="header__logo"/>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" value={input} onChange={(event)=>setInput(event.target.value)} />
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <img
                    src={photoURL}
                    alt='avatar'
                    className='fluid'
                />
            </div>
        </div>
    )
};

export default Header;