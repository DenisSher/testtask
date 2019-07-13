import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Wrapper = styled.div``;

function GuestApp() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [couple, setCouple] = useState(false);

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <span>
        Amount of guests:
        {items.reduce((acc, current) => {
          return current.couple === true ? acc + 2 : acc + 1;
        }, 0)}
      </span>
      <Wrapper>
        <input id="new-todo" value={text} onChange={e => handleChange(e)} />
        <p>With a couple</p>
        <input id="couple" type="checkbox" onClick={() => setCouple(!couple)} />
        <button
          onClick={() => {
            setItems([...items, { name: text, couple }]);
            setText("");
          }}
        >
          Add guest
        </button>
      </Wrapper>
      <TodoList items={items}/>
    </>
  );
}

export default GuestApp;
