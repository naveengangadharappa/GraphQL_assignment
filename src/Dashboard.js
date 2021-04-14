import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import TodoList from './Components/TodoList';
import UserDetails from './Components/UserDetails';
import { fetch_AllUsers } from './network/Apicall';

function Dashboard(props) {
    const [userdetails, setuser_details] = useState({});
    const [todolist, settodo_list] = useState([]);
    const [loading, setloading] = useState(false);


    useEffect(async () => {
        try {
            console.log(props)
            let userid = props.location.state.userid;
            console.log("Userid =  " + userid);
            if (userid) {
                console.log("Userid = " + userid);
                let query = `
                {
                    user(id: ${userid}){
            id
            name
            username
            email
            phone
            website
            address{
                street
                suite
                city
                zipcode
                }
            todos{
                data{
                    id
                    title
                    completed
                    }
                }
            }
        }
          `
                setloading(true);
                let result = await fetch_AllUsers(query);
                setloading(false);
                console.log("Result = ", (result));
                if (result.status) {
                    setuser_details(result.data.user);
                    settodo_list(result.data.user.todos.data)
                }
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    if (loading) return <h2>loading.....</h2>
    else {
        return (
            <>
                <NavBar {...props} />
                <div class="Container" style={{ flexDirection: "row" }}>
                    {userdetails && <UserDetails userdetails={userdetails} />}
                    {todolist && <TodoList todolist={todolist} />}
                </div>
            </>
        );
    }
}

export default Dashboard;
