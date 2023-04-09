import { useEffect, useState } from "react";
import { Switch } from "./SwitchToggleStyled";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/theme/slice";
import { selectTheme } from "redux/theme/selectors";

const SwitchToggle = ({ isOn, handleToggle ,styles}) => {
  const [on, setOn] = useState(isOn);


    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);


    useEffect(() => {
        if (!theme) {
            setOn(true);
        }
    }, [theme]);

    const handleSwitch = () => {
        setOn((prewState) => !prewState);
        dispatch(toggleTheme());
    };

    return (
       <Switch style={ styles }>
            <input type="checkbox" checked={on} onChange={handleSwitch} />
            <span />
        </Switch>
    );

};

export default SwitchToggle;
