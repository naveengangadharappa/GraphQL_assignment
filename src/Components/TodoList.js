import React, { useState } from 'react';
import './TodoList.css';
import { fetch_AllUsers } from '../network/Apicall'

const TodoList = (props) => {
    const [data, setdata] = useState(['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8']);
    const [loading, setloading] = useState(false);


    const delete_todo = async (id) => {
        try {
            let flg = window.confirm("Are you shure to delete this item");
            if (flg) {
                console.log("Delete confirmed");
                let query = `
                mutation{
                    deleteTodo(id: ${id})
                 }               
          `
                setloading(true);
                let result = await fetch_AllUsers(query);
                setloading(false);
                console.log("Result = ", (result));
                if (result.status) {
                    window.alert("Item Deleted successfully");
                } else {
                    window.alert("Item Deletion Unsuccessfully Please try again");
                }

            }
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="List-Container">
            <div className="List-textheading" style={{ flexDirection: 'row' }}>
                <h3 style={{ width: '80%' }}> To-do's </h3>
                <div className="add-list">+</div>
            </div>
            <hr />
            {props.todolist ? props.todolist.map(({ title, id }) =>
                <div className="List-text" key={id}>
                    <div style={{ display: "flex", flexDirection: 'row' }}>
                        <p style={{ width: '80%' }}>{title}</p>
                        <a href={'#'} style={{ width: '10%', fontWeight: 'bold' }} > ✓</a>
                        <a href={'#'} style={{ width: '10%', fontWeight: 'bold' }} onClick={(e) => delete_todo(id)}> ✖</a>
                    </div>
                    <hr style={{ color: 'gray', opacity: 0.5 }} />
                </div>
            ) : null}
            <div className="List-text" style={{ color: 'gray', textAlign: 'center' }}>
                {`Showing ${data.length} out of ${props.todolist.length} Records `}
            </div>
        </div>
    );
}

export default TodoList;