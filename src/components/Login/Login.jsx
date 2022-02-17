import { useContext, useState } from "react";
import { Context } from "../../context";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const setUsersDataHandler = (e) => {
    e.target.name === "userName" && setUserName(e.target.value);
    e.target.name === "userAge" && setUserAge(e.target.value);
  };

  const { addNewUser } = useContext(Context);

  const addUser = () => {
    addNewUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Name"
        name="userName"
        value={userName}
        onChange={setUsersDataHandler}
      />
      <input
        type="number"
        placeholder="Age"
        name="userAge"
        value={userAge}
        onChange={setUsersDataHandler}
      />
      <button onClick={addUser}>Add to UserList</button>
    </div>
  );
};
