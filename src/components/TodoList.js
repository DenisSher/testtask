import React from "react";
import { setGuest } from "../action"
import styled from "styled-components";
import { connect } from "react-redux"
import uuidv4 from "uuid/v4"

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
      {props.guests.map((item) => (
        <Guest>
          <Item
            value={item.name}
            disabled={true}
            onDoubleClick={() => {
            }}
          />
          <span>{item.couple === true ? "With couple" : "Single"}</span>
          <button
            onClick = {() => props.setGuest(props.guests.filter(x => x.id !== item.id))}
          >
            Delete
          </button>
        </Guest>
      ))}
    </GuestList>
  );
};

function mapStateToProps(state) {
  return {
    guests: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setGuest: payload => dispatch({type: "SET_USER", payload})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);