import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import uuidv4 from "uuid/v4";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const WrapperCheckbox = styled.div`
  display: flex;
`;

function GuestApp() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [couple, setCouple] = useState(false);

  useEffect(
    () => setItems(JSON.parse(localStorage.getItem("storage")) || []),
    []
  );

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      text === "" || setItems([...items, { id: uuidv4(), name: text, couple }]);
      setText("");
      localStorage.setItem("storage", JSON.stringify(items));
    }
  };

  return (
    <>
      <span>
        Amount of guests:
        {JSON.parse(localStorage.getItem("storage")).reduce((acc, current) => {
          return current.couple === true ? acc + 2 : acc + 1;
        }, 0)}
      </span>
      <Wrapper>
        <input
          value={text}
          onChange={e => handleChange(e)}
          onKeyPress={handleKeyPress}
        />
        <p>With a couple</p>
        <input type="checkbox" onClick={() => setCouple(!couple)} />
      </Wrapper>
      <p>Filter</p>
      <WrapperCheckbox>
        <input
          type="checkbox"
          onClick={() =>
            setItems(JSON.parse(localStorage.getItem("storage")) || [])
          }
        />
        <span>All</span>
        <input type="checkbox" />
        <span>With couple</span>
        <input type="checkbox" />
        <span>Single</span>
      </WrapperCheckbox>
      <TodoList
        onChange={() =>
          setItems(JSON.parse(localStorage.getItem("storage")) || [])
        }
      />
    </>
  );
}

export default GuestApp;
