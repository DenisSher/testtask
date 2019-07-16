import React, { useState } from "react"
import TodoList from "./components/TodoList"
import uuidv4 from "uuid/v4"
import styled from "styled-components"
import { addGuest } from "./action"
import { connect } from "react-redux"

const Wrapper = styled.div`
  display: flex;
`

const WrapperCheckbox = styled.div`
  display: flex;
`

function GuestApp(props) {
  const [text, setText] = useState("")
  const [couple, setCouple] = useState(false)


  const handleChange = e => {
    setText(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text !== "") {
      addGuest({ id: uuidv4(), name: text, couple })
      setText("")
    }
  }

  return (
    <>
      <span>
        Amount of guests:
        {props.state.reduce((acc, current) => {
          return current.couple === true ? acc + 2 : acc + 1
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
      <div>{props.counter}</div>
      <WrapperCheckbox>
        <input type="checkbox"/>
        <span>All</span>
        <input type="checkbox"/>
        <span>With couple</span>
        <input type="checkbox"/>
        <span>Single</span>
      </WrapperCheckbox>

      <TodoList items={props.state}/>
    </>
  )
}

function mapStateToProps(state) {
  return {
    addGuest: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    guests: payload => dispatch(addGuest(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestApp)
