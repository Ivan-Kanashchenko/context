export const UserListItem = ({ item }) => {
  return (
    <div className="user-item">
      <div>Name: {item.name}</div>
      <div>Age: {item.age}</div>
      <div>id: {item.id}</div>
    </div>
  );
};
