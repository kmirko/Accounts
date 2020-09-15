import React, {useState, useEffect, useRef} from "react";
import {withRouter} from "react-router-dom";

function AddAccounts (props){

    const idRef = useRef();

    useEffect(()=>{
        idRef.current.focus();
    },[]);
   
    const [newAccount, setNewAccount] = useState({id:"", name:"", lastname:"", age:""})

    const addAccounts =()=>{
        props.addAccounts(newAccount);
        props.history.push('/')
    }

        return(
            <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add Account</h2>
                    <div className="row">
                        <div className="col-8 offset-2">
                        <input type="text" ref={idRef} onChange={e=>{setNewAccount({...newAccount, id: e.target.value})}} placeholder="id" className="form-control"/><br/>
                        <input type="text" onChange={e=>{setNewAccount({...newAccount, name: e.target.value})}}  placeholder="name" className="form-control"/><br/>
                        <input type="text" onChange={e=>{setNewAccount({...newAccount, lastname: e.target.value})}}  placeholder="lastname" className="form-control"/><br/>
                        <input type="text" onChange={e=>{setNewAccount({...newAccount, age: e.target.value})}}  placeholder="age" className="form-control"/><br/>
                        <button onClick={addAccounts} className="btn btn-primary form-control">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
export default withRouter(AddAccounts);