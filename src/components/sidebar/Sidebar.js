import React from "react";
import "./_sidebar.scss";
import {useDispatch} from "react-redux";
import {
    MdSubscriptions,
    MdExitToApp,
    // MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
 } from 'react-icons/md'
import { logout } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";


const Sidebar=({sidebar,handleToggleSidebar})=>{
    const dispatch = useDispatch();
    const logOutHandler=()=>{
        dispatch(logout());
    };
    return(
        <nav 
            className={sidebar ? "sidebar open" : "sidebar"}
            onClick={()=>handleToggleSidebar(false)}
        >
            <li>
                <MdHome size={23}/>
                <span>Home</span>
            </li>
            <Link to="/feed/subscriptions">
                <li>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
                </li>
            </Link>
            <li>
               <MdHistory size={23} />
               <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't Know</span>
            </li>
            <hr/>
            <li onClick={logOutHandler}>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>
            <hr/>
        </nav>
    )
};

export default Sidebar;