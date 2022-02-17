import { useState } from "react";
import "./App.css";
import { Login } from "./components/Login/Login";
import { UserList } from "./components/UserList/UserList";
import { Context } from "./context";

function App() {

  const [userList, setUserList] = useState([]);

  const addNewUser = (newUserName, newUserAge) => {
    setUserList((prevState) => {
      if (prevState === userList) {
        return [
          ...userList,
          {
            name: newUserName,
            age: newUserAge,
            id: Math.floor(Math.random() * 10000),
          },
        ];
      }
    });
  };

  return (
    <Context.Provider value={{ userList, addNewUser }}>
      <div className="App">
        <Login />
        <UserList />
      </div>
    </Context.Provider>
  );
}

export default App;
