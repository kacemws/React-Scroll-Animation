import { Title } from "../Typographie";
import "./Header.scss";

export const Header: React.FC<{}> = ({ children, ...rest }) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="https://cdn.kiostore.net/file/kiostore/KIO+.svg" alt="logo" />
      </div>
      <div className="header-nav">
        <nav>
          <ul>
            <li>
              <Title>Home</Title>
            </li>
            <li>
              <Title>Kiosk</Title>
            </li>
            <li>
              <Title>Pricing</Title>
            </li>
            <li>
              <Title>About</Title>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-auth">
        <Title>Sign in</Title>
        <div className="button">
          <Title>Sign up</Title>
        </div>
      </div>
    </div>
  );
};
