import { SiFacebook, SiYoutube, SiTwitter, SiInstagram } from "react-icons/si";
import {
  LinksWrap,
  LinksTitle,
  LinksList,
  LinkItem,
} from "./FollowLinsk.styled";

export const FollowLinks = () => {
  return (
    <LinksWrap>
      <LinksTitle>Follow us</LinksTitle>
      <LinksList>
        <LinkItem>
          <a
            href="https://uk-ua.facebook.com/"
            target="blank"
            nofollow
            noreferrer
            noopener
          >
            <SiFacebook size="26" />
          </a>
        </LinkItem>
        <LinkItem>
          <a
            href="https://www.youtube.com/"
            target="blank"
            nofollow
            noreferrer
            noopener
          >
            <SiYoutube size="28" />
          </a>
        </LinkItem>
        <LinkItem>
          <a
            href="https://twitter.com/"
            target="blank"
            nofollow
            noreferrer
            noopener
          >
            <SiTwitter size="25" />
          </a>
        </LinkItem>
        <LinkItem>
          <a
            href="https://www.instagram.com/"
            target="blank"
            nofollow
            noreferrer
            noopener
          >
            <SiInstagram size="24" />
          </a>
        </LinkItem>
      </LinksList>
    </LinksWrap>
  );
};
