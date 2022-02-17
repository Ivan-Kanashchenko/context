import { UserListItem } from "./UserListItem/UserListItem";
import { useUsers } from "../../contexts/usersContext";

export const UserList = () => {
  const { userList } = useUsers();

  const userItems = userList.map((item, index) => (
    <UserListItem item={item} key={index} />
  ));

  return (
    <div className="UserList">
      <div>User List</div>
      {userItems.length > 0 ? userItems : "You haven`t users yet"}
    </div>
  );
};
