import React, { Component } from "react";
import Account from "../account/Account";

const AccountsTable =({accounts})=> {

const allAccounts = accounts.map(account=>{
    return(
        <Account account={account} key={account.id}/>
    )
})

        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">Accounts</h2>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>NAME</th>
                                            <th>LAST NAME</th>
                                            <th>AGE</th>
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
export default AccountsTable;