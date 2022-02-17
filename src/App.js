import "./App.css";
import UsersProvider from "./contexts/usersContext";
import { Login } from "./components/Login/Login";
import { UserList } from "./components/UserList/UserList";

function App() {
  return (
    <UsersProvider>
      <div className="App">
        <Login />
        <UserList />
      </div>
    </UsersProvider>
  );
}

export default App;
