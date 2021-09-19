import "./menu.scss";

import MenuItem from "./menuItem";

export default function Menu({ menuOpen, setMenuOpen }) {

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <MenuItem setMenuOpen={setMenuOpen} idReference="#intro" text="Home" />
      <MenuItem setMenuOpen={setMenuOpen} idReference="#portfolio" text="Portfolio" />
      <MenuItem setMenuOpen={setMenuOpen} idReference="#works" text="Works" />
      <MenuItem setMenuOpen={setMenuOpen} idReference="#contact" text="Contact" />
    </div>
  );
}