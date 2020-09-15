import React from "react";
import Account from "../account/Account";

const EditTable =({accounts, deleteAccount})=>{
const allAccounts = accounts.map(account=>{
    return(
        <Account account={account} edit={true} key={account.id} deleteAccount={deleteAccount}/>
    )
})

    return(
        <div className="container">
        <div className="row">
            <div className="col-10 offset-1">
                <h2 className="display-4 m-4">Edit/Delete</h2>
                <div className="row">
                    <div className="col-8 offset-2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>LAST NAME</th>
                                    <th>AGE</th>
                                    <th>DELETE</th>
                                    <th>EDIT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allAccounts}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default EditTable;