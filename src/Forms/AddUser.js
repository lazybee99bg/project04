import React, {useState} from 'react';

const AddUsers = (props) => {
    // const initialFormState = {
    //     id: null,
    //     name: '',
    //     username: ''
    // };
    // const [user, setUser] = useState(initialFormState);
    const [crud, setCrud] = useState([]);
    const handleInputChange = event => {
        const {id, value} = event.target;
        setCrud({
            ...crud,
            [id]: value
        })
    };
    return (
        <form onSubmit={
            e => {
                e.preventDefault();
                if (!crud.name || !crud.username) 
                    return;
                


                props.addUser(crud)
                setCrud()
            }
        }>
            <label>Id</label>
            <input type="text" name="name"
                value={
                    crud.id
                }
                onChange={handleInputChange}/>
            <label>availability</label>
            <input type="text" name="username"
                value={
                    crud.availability
                }
                onChange={handleInputChange}/>
            <label>domain</label>
            <input type="text" name="domain"
                value={
                    crud.domain
                }
                onChange={handleInputChange}/>
            <label>price</label>
            <input type="text" name="price"
                value={
                    crud.price
                }
                onChange={handleInputChange}/>

            <button>Add new user</button>
        </form>
    )
};

export default AddUsers
