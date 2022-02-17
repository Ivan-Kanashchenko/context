import { UserListItem } from "./UserListItem/UserListItem";
import { Context } from "../../context";
import { useContext } from "react";

export const UserList = () => {
  const { userList } = useContext(Context);

  const userItems = userList.map((item, index) => (
    <UserListItem item={item} key={index} />
  ));

  return (
    <div className="UserList">
      <div>User List</div>
      {userItems}
    </div>
  );
};
