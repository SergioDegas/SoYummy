import { FacebookIcon, InstIcon, SocialList, TwitterIcon, YTIcon } from "Layout/Footer/Footer.Styled"

export const Social = () => {
return(
    <>
    <SocialList>
              <li>
                <a href="/" aria-label="go to facebook">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="/" aria-label="go to youtube">
                  <YTIcon />
                </a>
              </li>
              <li>
                <a href="/" aria-label="go to twitter">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="/" aria-label="go to instagram">
                  <InstIcon />
                </a>
              </li>
            </SocialList>
    
    
    </>
    
    
    )

}