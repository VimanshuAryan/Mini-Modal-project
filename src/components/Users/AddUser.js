import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length===0) {
            setError({
                title:"Invalid Input",
                message:"Enter valid age and name"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title:"Invalid Age",
                message:"Enter valid age"
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    
    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/>}
        <Card className = {classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" 
                    type="text" 
                    onChange={usernameChangeHandler}
                    value={enteredUsername}
                    />
                <label htmlFor="age">Age(years)</label>
                <input id="age" 
                    type="number" 
                    onChange={ageChangeHandler}
                    value={enteredAge}
                    />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    );
};

export default AddUser;