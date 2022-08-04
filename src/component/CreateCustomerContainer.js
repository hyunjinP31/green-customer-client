import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setSubmit, goToHome} from '../modules/costomers';
import CreateCustomer2 from './CreateCustomer2';
import { useNavigate } from 'react-router-dom';
const CrateCustomerContainer = (props) => {
    const addCustomer = useSelector(state=> state.customers.addCustomer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onHome = () => {
        dispatch(goToHome(navigate))
    }
    const onChange = (e) => {
        dispatch(setInput(e))
    }
    const onSubmit = () => {
        dispatch(setSubmit())
    }
    return (
        <CreateCustomer2 onHome={onHome} onChange={onChange} onSubmit={onSubmit} addCustomer={addCustomer}/>

    );
};

export default CrateCustomerContainer;