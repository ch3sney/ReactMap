import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  // Eventually fetch from API
  const USERS = [
    {
      id: "u1",
      name: "Luke Chesney",
      image:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&dpr=2&s=none",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
