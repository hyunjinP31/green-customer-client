//리덕스 액션 탕비, 액션 생ㅁ성 함수, 초기값, 리듀서

const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT = "SET_LOGOUT";

export const setLogin = () => ({
    type: SET_LOGIN
})

export const setLogout = () => ({
    type: SET_LOGOUT
})

//초기값 설정
const initialState = {
    isLogin: false
}

//홈으로 이동 함수
export const goToHome = (navigate) => () => {
    navigate('/');
}
//리듀서
export default function logincheck(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                isLogin: true
            }
        case SET_LOGOUT:
            return {
                isLogin: false
            }
        default:
            return state;
    }
}