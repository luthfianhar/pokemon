import React from "react";
import pokemon from "../../assets/pokemon.png";

const Navbar = () => {
  const style = {
    backgroundColor: "#ffcb05",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    width: "full",
    position: "sticky",
    zIndex: 1,
  };
  return (
    <>
      <div style={style}>
        <img width={100} src={pokemon} alt="" />
      </div>
    </>
  );
};

export default Navbar;
