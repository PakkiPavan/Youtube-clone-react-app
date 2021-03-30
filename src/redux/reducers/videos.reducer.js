import { CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SUBSCRIPTIONS_CHANNEL_FAIL, SUBSCRIPTIONS_CHANNEL_REQUEST, SUBSCRIPTIONS_CHANNEL_SUCCESS } from "../actionTypes";

const initialState={
    videos:[],
    loading:false,
    nextPageToken:null,
    activeCategory:"All"
};

export const homeVideosReducer=(prevState=initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case HOME_VIDEOS_SUCCESS:
            return{
                ...prevState,
                videos:
                    prevState.activeCategory===payload.category?[...prevState.videos,...payload.videos]:payload.videos,
                loading:false,
                nextPageToken:payload.nextPageToken,
                activeCategory:payload.category
            }
        case HOME_VIDEOS_FAIL:
            return{
                ...prevState,
                loading:false,
                error:payload
            }
        case HOME_VIDEOS_REQUEST:
            return{
                ...prevState,
                loading:true
            }
        default:
            return prevState;
    }
}
export const selectedVideoReducer=(prevState={
        loading:true,
        video:null
    },action)=>{
    const {payload,type} = action;
    switch(type){
        case SELECTED_VIDEO_REQUEST:
            return{
                ...prevState,
                loading:true
            }
        case SELECTED_VIDEO_SUCCESS:
            return{
                ...prevState,
                video:payload,
                loading:false,
            }
        case SELECTED_VIDEO_FAIL:
            return{
                ...prevState,
                video:null,
                loading:false,
                error:payload
            }
        default:
            return prevState;
    }
}
export const relatedVideoReducer=(prevState={
    loading:true,
    videos:[]
},action)=>{
    const {payload,type} = action;
    switch(type){
        case RELATED_VIDEO_REQUEST:
            return{
                ...prevState,
                loading:true
            }
        case RELATED_VIDEO_SUCCESS:
            return{
                ...prevState,
                videos:payload,
                loading:false,
            }
        case RELATED_VIDEO_FAIL:
            return{
                ...prevState,
                loading:false,
                error:payload
            }
        default:
            return prevState;
    }
}

export const searchedVideosReducer=(prevState={
    loading:true,
    videos:[]
},action)=>{
    const {payload,type} = action;
    switch(type){
        case SEARCHED_VIDEO_REQUEST:
            return{
                ...prevState,
                loading:true
            }
        case SEARCHED_VIDEO_SUCCESS:
            return{
                ...prevState,
                videos:payload,
                loading:false,
            }
        case SEARCHED_VIDEO_FAIL:
            return{
                ...prevState,
                loading:false,
                error:payload
            }
        default:
            return prevState;
    }
}
export const subscriptionsChannelReducer=(prevState={
    loading:true,
    videos:[]
},action)=>{
    const {payload,type} = action;
    switch(type){
        case SUBSCRIPTIONS_CHANNEL_REQUEST:
            return{
                ...prevState,
                loading:true
            }
        case SUBSCRIPTIONS_CHANNEL_SUCCESS:
            return{
                ...prevState,
                videos:payload,
                loading:false,
            }
        case SUBSCRIPTIONS_CHANNEL_FAIL:
            return{
                ...prevState,
                loading:false,
                error:payload
            }
        default:
            return prevState;
    }
}
export const channelVideosReducer=(prevState={
    loading:true,
    videos:[]
},action)=>{
    const {payload,type} = action;
    switch(type){
        case CHANNEL_VIDEOS_REQUEST:
            return{
                ...prevState,
                loading:true
            }
        case CHANNEL_VIDEOS_SUCCESS:
            return{
                ...prevState,
                videos:payload,
                loading:false,
            }
        case CHANNEL_VIDEOS_FAIL:
            return{
                ...prevState,
                loading:false,
                error:payload
            }
        default:
            return prevState;
    }
}