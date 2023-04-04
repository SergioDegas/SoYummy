import { useState } from "react";
import { Switch } from "./SwitchToggleStyled";

const SwitchToggle = ({ isOn, handleToggle }) => {
  const [on, setOn] = useState(isOn);

  const handleSwitch = () => {
    setOn(!on);
    handleToggle(!on);
  };

  return (
    <Switch>
      <input type="checkbox" checked={on} onChange={handleSwitch} />
      <span />
    </Switch>
  );
};

export default SwitchToggle;
