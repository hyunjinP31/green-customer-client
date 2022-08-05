import axios from "axios";

const GET_GALLERY = "GET_GALLERY";
const GET_GALLERY_SUCCESS = "GET_GALLERY_SUCCESS";
const GET_GALLERY_ERROR = "GET_GALLERY_ERROR";

const initialState = {
    data: null,
    loading: false,
    error: null
}

//thunk 함수 사용(미들웨어)
export const getGallery = () => async (dispatch) =>{
    dispatch({type: GET_GALLERY}) //요청시작
    try{
        const response = await axios.get(`http://localhost:3001/gallerylist`)
        const gallerydata = response.data;
        dispatch({GET_GALLERY_SUCCESS, payload: gallerydata})
    }
    catch(e){
        dispatch({type: GET_GALLERY_ERROR, payload: e})
    }
}


export default function gallery (state= initialState, action) {
    switch(action.type){
        case GET_GALLERY:
            return {
                loading: true,
                data: null,
                error: null
           }
        case GET_GALLERY_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case GET_GALLERY_ERROR:
            return {
                loading: false,
                data: null,
                error: action.payload
            }
        default:
            return state;
    }
}