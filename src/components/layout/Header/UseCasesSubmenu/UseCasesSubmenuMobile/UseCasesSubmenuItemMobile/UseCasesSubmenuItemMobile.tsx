import s from './UseCasesSubmenuItemMobile.module.scss';
import {Dispatch, SetStateAction} from "react";
import MenuItemContent from "@/components/layout/Header/UseCasesSubmenu/MenuItemContent/MenuItemContent";

interface itemProps {
  item: string,
  currentMenuItem: number,
  setCurrentMenuItem: Dispatch<SetStateAction<number>>,
  index: number
}

const UseCasesSubmenuItemMobile = ({item, currentMenuItem, setCurrentMenuItem, index}: itemProps) => {
  const isOpen = currentMenuItem === index
  return (
    <li>
      <div className={`${s.item} ${isOpen ? s.itemActive : ''}`} onClick={() => setCurrentMenuItem(index)}>
        <span>{item}</span>
        <svg className={s.icon} width="6" height="5" viewBox="0 0 6 5" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.34853 0.5C0.516387 0.5 0.0482867 1.45707 0.55918 2.11393L2.21099 4.23767C2.61133 4.7524 3.38933 4.7524 3.78966 4.23767L5.44146 2.11393C5.95233 1.45707 5.48426 0.5 4.65213 0.5H1.34853Z"
          />
        </svg>
      </div>
      {
        isOpen && <MenuItemContent currentMenuItem={currentMenuItem}/>
      }

    </li>
  );
};

export default UseCasesSubmenuItemMobile;