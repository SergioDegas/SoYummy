import {
  EmailBox,
  EmailBtn,
  EmailForm,
  EmailIcon,
  EmailInput,
  EmailText,
  EmailTitle,
} from "Layout/Footer/Footer.Styled";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

export const Mail = () => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (email.trim() !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email]);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(email)) {
      toast.success("Email was successfully submitted!");
      return;
    }
    toast.error("Please enter a valid email!");
    //   axios.patch('http://localhost:4000/user/subscription', { email })
    // .then(response => {
    //   toast.success('Email was successfully asdasdasdasdas!');
    // })
    // .catch(error => {
    //   toast.error('Something went wrong. Please try again later!');
    // });
  };
  const onChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <EmailForm onSubmit={handleSubmit}>
        <EmailTitle>Subscribe to our Newsletter</EmailTitle>
        <EmailText>
          Subscribe up to our newsletter. Be in touch with <br />
          latest news and special offers, etc.
        </EmailText>
        <EmailBox>
          <EmailInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={onChange}
          />
          <EmailIcon />
        </EmailBox>
        <EmailBtn type="submit" disabled={isDisabled}>
          Subscribe
        </EmailBtn>
      </EmailForm>
    </>
  );
};
