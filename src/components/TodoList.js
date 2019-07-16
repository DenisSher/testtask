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

const TodoList = (props) => {
  return (
    <GuestList>
      {props.items.map((item) => (
        <Guest>
          <Item
            value={item.name}
            disabled={true}
            onDoubleClick={() => {
            }}
          />
          <span>{item.couple === true ? "With couple" : "Single"}</span>
          <button
            onClick={() => {
              props.items.filter(x => x.id !== item.id)
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