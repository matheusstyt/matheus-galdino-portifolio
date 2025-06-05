import { Flex } from "antd";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const linkStyle = (path: string) => ({
    color: "#fff",
    fontSize: "16px",
    position: "relative" as const,
    paddingBottom: "4px",
    borderBottom:
      location.pathname === path ? "2px solid #f55050" : "2px solid transparent",
    transition: "border-color 0.3s",
    cursor: "pointer",
    
  });

  return (
    <Flex
      style={{
        //width: "100%",
        zIndex: 2,
        padding: "20px",
        justifyContent: "flex-end",
        backgroundColor: "#1a1a1a",
        boxShadow: "0 8px 20px rgba(227, 76, 38, 0.4)"
      }}
      gap={32}
    >
      <Link to="/" style={linkStyle("/")}>
        Contratar serviços
      </Link>
      <Link to="/portfolio" style={linkStyle("/portfolio")}>
        Portfólio
      </Link>
    </Flex>
  );
};

export default Header;
