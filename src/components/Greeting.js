import React, { useState } from "react";

function Greeting() {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <p>it is good to see you</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}

export default Greeting;
