import { useState, useEffect } from "react";

const Team = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();
    console.log(json);
    setUsers(json.users);
  };

  const UserTile = ({ item }) => {
    return (
      <div
        style={{
          height: 400,
          margin: 10,
          borderColor: "black",
          borderWidth: 2,
        }}
      >
        <img
          style={{
            height: 200,
            width: "100%",
          }}
          src={item.image}
        />
        <h2>{item.firstName}</h2>
        <h2>{item.lastName}</h2>
        <h2>{item.email}</h2>
        <h2>{item.phone}</h2>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {users?.map((item) => (
        <UserTile key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Team;
