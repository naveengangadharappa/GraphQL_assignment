import React, { useEffect, useState } from 'react';
import './ListUsers.css';
import { fetch_AllUsers } from './network/Apicall';

const ListUsers = (props) => {
    const [users, setusers] = useState([]);
    const [loading, setloading] = useState(false);
    const [totalcount, set_Totalcount] = useState(0);

    useEffect(async () => {
        try {
            let query = `
        query ($options: PageQueryOptions) {
            users(options: $options) {
              data {
                id
                name
                username
              }
              meta {
                totalCount
              }
            }
          }
          `
            setloading(true);
            let result = await fetch_AllUsers(query);
            console.log("Result = ", (result));
            setloading(false);
            if (result.status) {
                if (result.data.users.data) setusers(result.data.users.data);
                if (result.data.users.meta.totalCount) set_Totalcount(result.data.users.meta.totalCount);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    if (loading) return <h2>loading.....</h2>
    else {
        return (
            <div className="UserList-Container">
                <p className="UserList-textheading" >User List</p>
                <hr />
                {users.map(({ name, username, id }) =>
                    <div key={id}>
                        <div className="UserList-text" style={{ display: "flex", flexDirection: 'row' }}>
                            <p style={{ width: '80%' }}>{name}<p>{username}</p></p>
                            <a href={'#'} target="" onClick={() => { props.history.push('/Dashboard', { userid: id }) }}>View Details</a>
                            {/* <p style={{ width: '10%', fontWeight: 'bold' }}> ✓</p>
                            <p style={{ width: '10%', fontWeight: 'bold' }}> ✖</p> */}
                        </div>
                        <hr style={{ color: 'gray', opacity: 0.5 }} />
                    </div>
                )}
                <div className="UserList-text" style={{ color: 'gray', textAlign: 'center' }}>
                    {`Showing ${users.length} out of ${totalcount} Records `}
                </div>
            </div>
        );
    }
}

export default ListUsers;