import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SearchCustomer from './SearchCustomer';
import styled, {css} from 'styled-components';

const BlackBg = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
`;
const WhiteBox = styled.div`
    width: 500px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 10px;
`;
const Span1 = styled.span`
    display: block;
    width: 20px;
    height: 2px;
    background: crimson;
    position: absolute;
    top: 30px;
    right: 30px;
    transform: rotate(-45deg);
`;
const Span2 = styled.span`
    display: block;
    width: 20px;
    height: 2px;
    background: crimson;
    position: absolute;
    top: 30px;
    right: 30px;
    transform: rotate(45deg);
`;
const SearchInput = styled.input`
    width: 300px;
    height: 30px;
    padding-left: 10px;
    border: 1px solid #ccc;
    outline: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


const Header = ({isOn, setIsOn}) => {
    const [ value, setValue ] = useState("");
    function onChange(e){
        setValue(e.target.value);
    }
    const onClick = () => {
        setIsOn(true);
    }
    const disable = () => {
        setIsOn(false);
    }
    return (
        <div id="header">
            <h1><Link to="/">그린 고객센터</Link></h1>
            <ul>
                <li><Link to="/">고객리스트 보기</Link></li>
                <li><Link to="/write">신규 고객 등록하기</Link></li>
                <li onClick={onClick}>고객 검색</li>
                {isOn && (
                    <>
                        <BlackBg onClick={disable}>
                        </BlackBg>
                        <WhiteBox>
                            <Span1 onClick={disable} />
                            <Span2 onClick={disable} />
                            <form method=''></form>
                                <SearchInput placeholder='찾을 값을 입력하세요' value={value} onChange={onChange}/>
                        </WhiteBox>
                    </>
                    ) }
            </ul>
        </div>
    );
};

export default Header;