import React, { useContext, useState } from "react";

const UsersContext = React.createContext({ userList: [] });

const UsersProvider = ({ children }) => {
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
    <UsersContext.Provider value={{ userList, addNewUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (context === undefined) {
    throw new ReferenceError("useUsers inside in provider");
  }
  return context;
};

export default UsersProvider;
