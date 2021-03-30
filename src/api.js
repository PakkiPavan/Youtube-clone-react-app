import axios from "axios";

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyAlUl5KsNSxBMUmd9v05PEMjwO2X6BjzpM"//process.env.REACT_APP_YOUTUBE_API_KEY
    }
});

export default request;
