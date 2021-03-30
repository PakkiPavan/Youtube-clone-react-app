import React,{useEffect} from 'react'
import "./loginScreen.scss";
import {useDispatch,useSelector} from "react-redux";
import { login } from '../../redux/actions/auth.action';
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector(state=>state.auth.accessToken);
    const handleLogin = () =>{
        dispatch(login());
    }
    const history = useHistory();
    useEffect(() => {
        if(accessToken){
            history.push("/");
        }
    }, [accessToken,history])
    return (
        <div className='login'>
         <div className='login__container'>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt='yt-logo'
            />

            <button onClick={handleLogin}>Login With Google</button>

            <p>A Youtube clone project using Youtube-api</p>
         </div>
        </div>
    )
}

export default LoginScreen
