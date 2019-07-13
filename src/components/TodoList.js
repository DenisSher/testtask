import React from "react";
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

const TodoList = ({ items, onFilter }) => (
  <GuestList>
    {items.map((item, index) => (
      <Guest>
        <Item value={item.name} key={item.id} disabled={true} />
        <span>{item.couple === true ? 'With couple' : "Single"}</span>
        <button>Delete</button>
      </Guest>
    ))}
  </GuestList>
);

export default TodoList;
