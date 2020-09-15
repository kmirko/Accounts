import React, { useState } from "react";
import {withRouter} from "react-router-dom";

function EditAccount (props){
   
    const [account, setAccount] = useState(props.accounts.filter(acc=>acc.id == props.match.params.id)[0])
   
    const editAccounts =()=>{
        props.editAccounts(account);
        props.history.push('/')
    }

        return(
            <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add Account</h2>
                    <div className="row">
                        <div className="col-8 offset-2">
                        <input type="text" onChange={e=>{setAccount({...account, id: e.target.value})}}  className="form-control" value={account.id}/><br/>
                        <input type="text" onChange={e=>{setAccount({...account, name: e.target.value})}}  className="form-control" value={account.name}/><br/>
                        <input type="text" onChange={e=>{setAccount({...account, lastname: e.target.value})}}   className="form-control" value={account.lastname}/><br/>
                        <input type="text" onChange={e=>{setAccount({...account, age: e.target.value})}}   className="form-control" value={account.age}/><br/>
                        <button onClick={editAccounts} className="btn btn-secondary form-control">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
export default withRouter(EditAccount);