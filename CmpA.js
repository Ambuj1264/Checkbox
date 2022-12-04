import React, { useState } from "react";

const CmpA = ({ state }) => {
  const [states, setStates] = useState(state);
  const [checkedvalues, setchecked] = useState([]);

  const handlecheck = (e) => {
    if (e.target.checked) {
      console.log(e.target.value);
      checkedvalues.push(states[e.target.value].email);
    } else {
      checkedvalues.splice(
        checkedvalues.indexOf(states[e.target.value].email),
        1
      );
    }
    console.log(checkedvalues, "checked value");
  };

  return (
    <>
      <div>
        {states.map((value, key) => (
          <div className="form-check" key={key}>
            <input
              onChange={handlecheck}
              value={key}
              className="form-check-input"
              type="checkbox"
              key={key}
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
            <br />
            <span>{value.name}</span>
            <br />
            {value.email.map((emails) => (
              <span>{emails} , </span>
            ))}
          </div>
        ))}
      </div>
      <hr />
      <div>
        {checkedvalues.map((value, key) => (
          <span>{value}, </span>
        ))}
      </div>
    </>
  );
};

export default CmpA;
