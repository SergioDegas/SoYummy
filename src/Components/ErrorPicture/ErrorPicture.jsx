import { Picture } from "./ErrorPicture.styled";

export const ErrorPicture = ({ image }) => {
    return <Picture src={image} alt="Not found" />;
};
