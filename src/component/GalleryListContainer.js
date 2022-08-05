import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from '../modules/gallery'

const GalleryListContainer = () => {
    const {data,loading, error} = useSelector(state=>state.gallery);
    const dispatch = useDispatch();
    //컴포넌트 마운트 후 게시글 요청하기
    useEffect(()=>{
        dispatch(getGallery(dispatch))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return console.log(error);
    if(!data) return null;
    return (
        <div>
            {data.map(da=>
                <li>
                    <lig src={`http://localhost:3001/upload/${da.imgurl}`} width='300' alt='' />
                    <br /> <span>{da.title}</span>
                </li>    
            )}
        </div>
    );
};

export default GalleryListContainer;