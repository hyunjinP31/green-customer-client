import React,{ useState } from 'react';
import { Table, TableBody, TableRow, TableCell} from '@mui/material';
import PopupDom  from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const CreateCustomer2 = ({ onChange, onSubmit, addCustomer, onHome }) => {
    //우편번호 관리하기
    const onAddData = (data) => {
        console.log(data);
        const postAdd = data.address;
        onChange({
            target: {
                name:'c_add',
                value: postAdd
            }
        })
    }
    //팝업창 상태 관리
    const [ isPopupOpen ,setIsPopupOpen] = useState(false);
    //팝업창 상태 true로 변경
    const openPostCode = ()=>{
        setIsPopupOpen(true);
    }
    //팝업창 상태 false로 변경
    const closePostCode = () => {
        setIsPopupOpen(false);
    }
    
    //폼 submit이벤트 
    const onSubmitch = (e) => {
        //form에 원래 연결된 이벤트를 제거
        e.preventDefault();
        //전화번호가 숫자인지 체크하기
        if(isNaN(addCustomer.c_phone)){
            alert("전화번호는 숫자만 입력해주세요");
        }
        //input에 값이 있는지 체크하고 
        //입력이 다되어있으면 post전송 
        if(addCustomer.c_name !== "" && addCustomer.c_phone !== "" && 
        addCustomer.c_birth !== "" && addCustomer.c_gender !== "" && 
        addCustomer.c_add !== "" && addCustomer.c_adddetail !== ""){
            onSubmit()
            onHome()
        }
    }
    
    return (
        <div>
            <h2>신규 고객 등록하기</h2>
            <form onSubmit={onSubmitch}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>이름</TableCell>
                            <TableCell>
                                <input name="c_name" type="text" 
                                value={addCustomer.c_name} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>연락처</TableCell>
                            <TableCell>
                                <input name="c_phone" type="text" 
                                value={addCustomer.c_phone} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>생년월일</TableCell>
                            <TableCell>
                                <input name="c_birth" type="date" 
                                value={addCustomer.c_birth} 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>성별</TableCell>
                            <TableCell>
                                여성<input name="c_gender" type="radio" 
                                value="여성" 
                                onChange={onChange}/>
                                남성<input name="c_gender" type="radio" 
                                value="남성" 
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>주소</TableCell>
                            <TableCell>
                                <input name="c_add" type="text" 
                                value={addCustomer.c_add} 
                                onChange={onChange}/>
                                <input name="c_adddetail" type="text"
                                value={addCustomer.c_adddetail}
                                onChange={onChange}/>
                                <button type="button" onClick={openPostCode}>우편번호 검색</button>
                                <div id="popupDom">
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode}
                                            onAddData={onAddData}
                                            />
                                        </PopupDom>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <button type="submit">등록</button>
                                <button type="reset">취소</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
};

export default CreateCustomer2;