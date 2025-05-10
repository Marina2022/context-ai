import s from './MenuItemContent.module.scss';
import Item1Content from "@/components/layout/Header/UseCasesSubmenu/MenuItemContent/contents/Item1Content/Item1Content";

const MenuItemContent = ({currentMenuItem} : {currentMenuItem: number}) => {
  
  if (currentMenuItem === 0) return <Item1Content />
    
  return (
    <div className={s.content}>
      Content for Menu Item # {currentMenuItem + 1}
    </div>
  );
};

export default MenuItemContent;