import s from './Header.module.scss';
import HeaderMenu from "@/components/layout/Header/HeaderMenu/HeaderMenu";


const Header = () => {
  return (
    <>
      <header className={s.header}>
        Header
      </header>

      <HeaderMenu/>
    </>

  );
};

export default Header;