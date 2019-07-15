import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GuestList = styled.ul`
  list-style: none;
  padding-left: 0;
  color: black;
  opacity: 1;
`;

const Guest = styled.li`
  color: black;
`;

const Item = styled.input`
  outline: none;
  background: white;
  border: none;
`;

const TodoList = () => {
  const [guests, setGuests] = useState(
    JSON.parse(localStorage.getItem("storage"))
  );
  useEffect(
    () => setGuests(JSON.parse(localStorage.getItem("storage")) || []),
    []
  );
  return (
    <GuestList>
      {guests.map((item, id) => (
        <Guest>
          <Item
            value={item.name}
            disabled={true}
            onDoubleClick={() => {
              console.log(id);
            }}
          />
          <span>{item.couple === true ? "With couple" : "Single"}</span>
          <button
            onClick={() => {
              localStorage.setItem(
                "storage",
                JSON.stringify(guests.filter(x => x.id !== item.id))
              );
              setGuests(JSON.parse(localStorage.getItem("storage")));
            }}
          >
            Delete
          </button>
        </Guest>
      ))}
    </GuestList>
  );
};

export default TodoList;
