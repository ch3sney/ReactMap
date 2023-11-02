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
    {
      id: "u2",
      name: "Blue Chesney",
      image:
        "https://www.thesprucepets.com/thmb/AyzHgPQM_X8OKhXEd8XTVIa-UT0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg",
      places: 5,
    },
    {
      id: "u3",
      name: "Poop Chesney",
      image:
        "https://www.thesprucepets.com/thmb/AyzHgPQM_X8OKhXEd8XTVIa-UT0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg",
      places: 0,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
