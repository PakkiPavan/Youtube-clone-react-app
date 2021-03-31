import { CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SUBSCRIPTIONS_CHANNEL_FAIL, SUBSCRIPTIONS_CHANNEL_REQUEST, SUBSCRIPTIONS_CHANNEL_SUCCESS } from "../actionTypes";
import request from "../../api";

export const getPopularVideos=()=>{
    return async (dispatch,getState)=>{
        try{
            dispatch({
                type:HOME_VIDEOS_REQUEST
            });
            const res=await request("/videos",{
                params:{
                    part:"snippet,contentDetails,statistics",
                    chart:"mostPopular",
                    region:"IN",
                    maxResults:20,
                    pageToken:getState().homeVideos.nextPageToken,
                }
            });
            console.log(res);
            dispatch({
                type:HOME_VIDEOS_SUCCESS,
                payload:{
                    videos:res.data.items,
                    nextPageToken:res.data.nextPageToken,
                    category:"All"
                }
            });
        }
        catch(error){
            console.log(error.message);
            dispatch({
                type:HOME_VIDEOS_FAIL,
                payload:error.message
            });
        }
    };
}

export const getVideosByCategory=(keyword)=>{
    return async (dispatch,getState)=>{
        try{
            dispatch({
                type:HOME_VIDEOS_REQUEST
            });
            const res=await request("/search",{
                params:{
                    part:"snippet",
                    maxResults:20,
                    pageToken:getState().homeVideos.nextPageToken,
                    q:keyword,
                    type:"video"
                }
            });
            console.log(res);
            dispatch({
                type:HOME_VIDEOS_SUCCESS,
                payload:{
                    videos:res.data.items,
                    nextPageToken:res.data.nextPageToken,
                    category:keyword
                }
            });
        }
        catch(error){
            console.log(error.message);
            dispatch({
                type:HOME_VIDEOS_FAIL,
                payload:error.message
            });
        }
    };
}
export const getVideoById=(id)=>{
    return async(dispatch)=>{
        try{
            dispatch({
                type:SELECTED_VIDEO_REQUEST
            });
            const {data} = await request("/videos",{
                params:{
                    part:"snippet,statistics",
                    id:id
                }
            });
            dispatch({
                type:SELECTED_VIDEO_SUCCESS,
                payload:data.items[0]
            });
        }
        catch(error){
            console.log(error.message);
            dispatch({
                type:SELECTED_VIDEO_FAIL,
                payload:error.message
            });
        }
    };
}
export const getRelatedVideos=(id)=>{
    return async(dispatch)=>{
        try{
            dispatch({
                type:RELATED_VIDEO_REQUEST
            });
            const {data} = await request("/search",{
                params:{
                    part:"snippet",
                    relatedToVideoId:id,
                    maxResults:15,
                    type:"video"
                }
            });
            dispatch({
                type:RELATED_VIDEO_SUCCESS,
                payload:data.items
            });
        }
        catch(error){
            console.log(error.data.response.message);
            dispatch({
                type:RELATED_VIDEO_FAIL,
                payload:error.data.response.message
            });
        }
    };
}
export const getVideosBySearch=(keyword)=>{
    return async (dispatch,getState)=>{
        try{
            dispatch({
                type:SEARCHED_VIDEO_REQUEST
            });
            const {data}=await request("/search",{
                params:{
                    part:"snippet",
                    maxResults:20,
                    // pageToken:getState().homeVideos.nextPageToken,
                    q:keyword,
                    type:"video,channel"
                }
            });
            dispatch({
                type:SEARCHED_VIDEO_SUCCESS,
                payload:data.items
            });
        }
        catch(error){
            console.log(error.message);
            dispatch({
                type:SEARCHED_VIDEO_FAIL,
                payload:error.message
            });
        }
    };
}
export const getSubscribedChannels=()=>{
    return async(dispatch,getState)=>{
        try{
            dispatch({
                type:SUBSCRIPTIONS_CHANNEL_REQUEST
            });
            const {data} = await request("/subscriptions",{
                params:{
                    part:"snippet,contentDetails",
                    mine:true
                },
                headers:{
                    Authorization:`Bearer ${getState().auth.accessToken}`
                }
            });
            dispatch({
                type:SUBSCRIPTIONS_CHANNEL_SUCCESS,
                payload:data.items
            });
        }
        catch(error){
            console.log(error.response.data);
            dispatch({
                type:SUBSCRIPTIONS_CHANNEL_FAIL,
                payload:error.response.data
            });
        }
    };
}
export const getVideosByChannel=(id)=>{
    return async(dispatch)=>{
        try{
            dispatch({
                type:CHANNEL_VIDEOS_REQUEST
            });
            // 1. get upload playlist id
            const {data:{items}} = await request("/channels",{
                params:{
                    part:"contentDetails",
                    id:id
                }
            });
            const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;
            // 2. Get the videos by ID
            const {data} = await request("/playlistItems",{
                params:{
                    part:"snippet,contentDetails",
                    playlistId:uploadPlaylistId,
                    maxResults:30
                }
            });
            dispatch({
                type:CHANNEL_VIDEOS_SUCCESS,
                payload:data.items
            });
        }
        catch(error){
            console.log(error.response.data.message);
            dispatch({
                type:CHANNEL_VIDEOS_FAIL,
                payload:error.response.data.message
            });
        }
    };
}