import "./menu.scss";

import MenuItem from "./menuItem";
import { useTranslation } from 'react-i18next';

export default function Menu({ menuOpen, setMenuOpen }) {
  const { t } = useTranslation();

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <MenuItem setMenuOpen={setMenuOpen} idReference="#intro" text={t("menu.home")} />
      <MenuItem setMenuOpen={setMenuOpen} idReference="#portfolio" text={t("menu.portfolio")} />
      <MenuItem setMenuOpen={setMenuOpen} idReference="#works" text={t("menu.works")} />
      <MenuItem setMenuOpen={setMenuOpen} idReference="#contact" text={t("menu.contact")} />
    </div>
  );
}