import AddUser from './Forms/AddUser';
import EditUser from './Forms/EditUser';
import UserTable from './Tables/UserTable';
import {useState, useEffect} from 'react';
import Crud from './Tables/Crud'
import './App.css';

function App() {
    // const usersData = [
    //     {
    //         id: 1,
    //         name: 'Tania',
    //         username: 'floppydiskette'
    //     }, {
    //         id: 2,
    //         name: 'Craig',
    //         username: 'siliconeidolon'
    //     }, {
    //         id: 3,
    //         name: 'Ben',
    //         username: 'benisphere'
    //     },
    // ];
    // const initialFormState = {
    //     id: null,
    //     name: '',
    //     username: ''
    // };
    // const [currentUser, setCurrentUser] = useState(initialFormState);

    const [users, setUsers] = useState([]);
    const [crud, setCrud] = useState([]);
    useEffect(() => {
        fetchCrud();
    }, []);
    async function fetchCrud() {
        const requestUrl = 'https://5cf88dd5e3c79f001439ae93.mockapi.io/webbox/webbox';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({responseJSON})
        if (responseJSON) {
            setCrud(responseJSON);
        }


    }
    const [editing, setEditing] = useState(false);
    const editRow = item => {
        setEditing(true);
        setCrud({id: item.id, availability: item.availability, domain: item.domain, price: item.price})
    };

    const addUser = item => {
        item.id = Crud.length + 1;
        setCrud([
            ...Crud,
            item
        ])
    };

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    };

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setCrud(id.map(user => (user.id === id ? updatedUser : user)))
    }
    return (
        <div className="container">
            <h1>CRUD
            </h1>
            <div className="flex-row">
                <div className="flex-large">
                    {
                    editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUser editing={editing}
                                setEditing={setEditing}
                                currentUser={crud}
                                updateUser={updateUser}/>
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUser addUser={addUser}/>
                        </div>
                    )
                } </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    {/* <UserTable posts={UserTable}/> */}
                    <Crud posts={crud}/>
                </div>
            </div>
        </div>
    );
}
export default App;
