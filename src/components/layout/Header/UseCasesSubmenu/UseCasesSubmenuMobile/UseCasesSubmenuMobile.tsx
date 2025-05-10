import s from './UseCasesSubmenuMobile.module.scss';
import UseCasesSubmenuItemMobile
  from "@/components/layout/Header/UseCasesSubmenu/UseCasesSubmenuMobile/UseCasesSubmenuItemMobile/UseCasesSubmenuItemMobile";

interface MenuItemsProps {
  headerMenuItems: string[],
  currentMenuItem: number,
  setCurrentMenuItem: React.Dispatch<React.SetStateAction<number>>
}

const UseCasesSubmenuMobile = ({headerMenuItems, currentMenuItem, setCurrentMenuItem}: MenuItemsProps) => {
  return (
    <div className={s.menuWrapper}>
      <ul className={s.items}>
        {
          headerMenuItems.map((item, i) => {
            return <UseCasesSubmenuItemMobile key={i} 
                                              item={item} 
                                              currentMenuItem={currentMenuItem}
                                              setCurrentMenuItem={setCurrentMenuItem}
                                              index={i}
            />
          })
        }
      </ul>
    </div>
  )
}

export default UseCasesSubmenuMobile;