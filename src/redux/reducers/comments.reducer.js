import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from "../actionTypes";

export const commentListReducer=(prevState={
    loading:true,
    comments:null
},action)=>{
const {payload,type} = action;
    switch(type){
        case COMMENT_LIST_REQUEST:
            return{
                ...prevState,
                loading:true
            }
        case COMMENT_LIST_SUCCESS:
            return{
                ...prevState,
                comments:payload,
                loading:false,
            }
        case COMMENT_LIST_FAIL:
            return{
                ...prevState,
                loading:false,
                error:payload
            }
        default:
            return prevState;
    }
}