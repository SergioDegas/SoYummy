import { LinksWrap, LinksTitle, LinksList } from './FollowLinsk.styled';

export const FollowLinks = () => {
  return (
    <LinksWrap>
      <LinksTitle>Follow us</LinksTitle>
      <LinksList>
        <li>
          <a href="https://uk-ua.facebook.com/">F</a>
        </li>
        <li>
          <a href="https://www.youtube.com/">Y</a>
        </li>
        <li>
          <a href="https://twitter.com/">T</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">I</a>
        </li>
      </LinksList>
    </LinksWrap>
  );
};
