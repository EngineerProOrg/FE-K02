import { useReducer, useState } from "react";


// update-first-name
// update-last-name
// update-email
// update-birthday

const reducer = (prevState, action) => {
  const { type, payload } = action;

  const newState = { ...prevState };

  switch (type) {
    case 'update-first-name': {
      newState.fname = payload;
      break;
    }

    case 'update-last-name': {
      newState.lname = payload;
      break;
    }

    case 'update-email': {
      newState.email = payload;
      break;
    }

    case 'update-birthday': {
      newState.birthday = payload;
      break;
    }
  }

  return newState;
}


export function UseReducer() {
  // const [values, dispatch] = useReducer(reducer, {});

  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={values.fname}
            onChange={(e) => {
              const action = {
                type: 'update-first-name',
                payload: e.target.value
              }

              dispatch(action)
            }}
          />
          <br /><br />
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={values.lname}
            onChange={(e) => {
              const action = {
                type: 'update-last-name',
                payload: e.target.value
              }

              dispatch(action)
            }}
          />
          <br /><br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={(e) => {
              const action = {
                type: 'update-email',
                payload: e.target.value
              }

              dispatch(action)
            }}
          />
          <br /><br />
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={values.birthday}
            onChange={(e) => {
              const action = {
                type: 'update-birthday',
                payload: e.target.value
              }

              dispatch(action)
            }}
          />
          <br /><br />
        </fieldset>

        <button onClick={(e) => {
          e.preventDefault()
          console.log(values)
        }}>Submit</button>
      </form>
    </>
  );
}
