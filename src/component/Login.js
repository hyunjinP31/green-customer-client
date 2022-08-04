import { Link } from '@mui/material';
import React, {useState} from 'react';
import axios from 'axios';
import { setCookie } from '../util/cookie';
import { useDispatch } from 'react-redux/es/exports';
import { setLogin, goToHome } from '../modules/logincheck';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        usermail: "",
        userpass: ""
    })
    const onChange = (e)=>{
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        //값이 있는 지 체크
        if(loginData.usermail === '' || loginData.userpass === ''){
            return alert('이메일과 비밀번호를 입력해주세요');
        }else{
            axios.post('http://localhost:3001/login', loginData)
            .then(result=>{
                let {usermail, username} = result.data;
                console.log(result);
                //usermail에 값이 있을 때
                if(usermail !== null && usermail !== '' && usermail !== undefined){
                    alert('로그인되었습니다.');
                    //현재 시간 객체 생성
                    let expires = new Date();
                    //60분 더한 값으로 변경
                    expires.setMinutes(expires.getMinutes()+60);
                    setCookie('usermail', `${usermail}`, {path: '/', expires});
                    setCookie('username', `${username}`, {path: '/', expires});
                    dispatch(setLogin());
                    dispatch(goToHome(navigate));
                }
            })
            .catch(e=> alert('이메일과 비밀번호를 확인해주세요'))
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <p><input type="text" name="usermail" onChange={onChange} value={loginData.usermail} /></p>
                <p><input type="password" name="userpass" onChange={onChange} value={loginData.userpass}/></p>
                <p><button type='submit'>로그인</button><Link to="/join" ><button>회원가입</button></Link></p>
            </form>
        </div>
    );
};

export default Login;