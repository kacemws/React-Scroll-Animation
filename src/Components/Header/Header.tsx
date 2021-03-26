import "./Header.scss";

export const Header: React.FC<{}> = ({ children, ...rest }) => {
  return <div className="header">{children}</div>;
};
