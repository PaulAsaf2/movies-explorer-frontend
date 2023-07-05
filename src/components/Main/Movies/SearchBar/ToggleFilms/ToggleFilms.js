import { React, useState } from "react";

function ToggleFilms({ toggled, onClick }) {
  const [isToggle, setIsToggle] = useState(toggled)

  function handleToggle() {
    setIsToggle(!isToggle);
    onClick(!isToggle);
  }

  return (
    <label className="toggle">
      <input
        className="toggle__input"
        type="checkbox"
        defaultChecked={isToggle}
        onClick={handleToggle}
      />
      <span className="toggle__span" />
    </label>
  )
}

export default ToggleFilms;