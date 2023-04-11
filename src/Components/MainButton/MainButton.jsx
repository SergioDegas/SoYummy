import { Button } from "./MainButton.styled";

export const MainButton = ({ children, onClick }) => {
    return (
        <Button type="button" onClick={onClick}>
            {children}
        </Button>
    );
};
