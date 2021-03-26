import "./Header.scss";

export const Header: React.FC<{}> = ({ children, ...rest }) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="https://cdn.kiostore.net/file/kiostore/KIO+.svg" alt="logo" />
      </div>
      <div className="header-nav"></div>
      <div className="header-auth"></div>
    </div>
  );
};
