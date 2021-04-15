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
    const [uid, set_uid] = useState('');

    useEffect(async () => {
        try {
            let userid = props.location.state.userid;
            if (userid) {
                console.log("user id = " + userid);
                set_uid(userid);
                await LoadData(userid);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    const LoadData = async (user_id) => {
        try {
            console.log("Enterd LoadData = " + user_id);
            if (user_id) {
                let query = `
                {
                    user(id: ${user_id}){
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
    }

    if (loading) return <h2>loading.....</h2>
    else {
        return (
            <>
                <NavBar {...props} />
                <div class="Container" style={{ flexDirection: "row" }}>
                    {userdetails && <UserDetails userdetails={userdetails} />}
                    {todolist && <TodoList todolist={todolist} LoadData={LoadData} user_id={uid} />}
                </div>
            </>
        );
    }
}

export default Dashboard;
