import React, { useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AccountsTable from "./components/accountsTable/AccountsTable";
import AddAccounts from "./components/addAccounts/AddAccounts";
import EditAccount from "./components/editAccount/EditAccount";
import EditTable from "./components/editTable/EditTable";
import Navbar from "./components/navbar/Navbar";

 function App (){
  
    const [accounts, setAccounts] = useState([
        {id:1, name:"Miloš", lastname:"Milošević", age:25},
        {id:2, name:"Petar", lastname:"Petrović", age:35}
    ])

    const addAccounts =(acc)=>{
        setAccounts([...accounts, acc]);
    }

    const deleteAccount =(id)=>{
        const newCopyAccounts = accounts.filter(acc=>acc.id !== id);
        setAccounts(newCopyAccounts)
    }
    const editAccounts =(acc)=>{
        let accountPossitions = accounts.map(acc=>acc.id).indexOf(acc.id);
        accounts[accountPossitions] = acc;
        setAccounts({accounts})
    }

        return(
            <BrowserRouter>
                <Navbar/>
                <Route path="/" exact>
                    <AccountsTable accounts={accounts}/>
                </Route>
                <Route path="/add">
                    <AddAccounts addAccounts={addAccounts}/>
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                     <EditAccount accounts={accounts} editAccounts={editAccounts}/>   
                    </Route>
                <Route path="/edit">
                    <EditTable accounts={accounts} deleteAccount={deleteAccount}/>
                </Route>
                </Switch>
               
            </BrowserRouter>
        )
    }
export default App;