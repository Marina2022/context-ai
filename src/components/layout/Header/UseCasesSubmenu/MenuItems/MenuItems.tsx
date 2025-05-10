import s from './MenuItems.module.scss';

interface MenuItemsProps {
  headerMenuItems: string[],
  currentMenuItem: number,
  setCurrentMenuItem: React.Dispatch<React.SetStateAction<number>>  
}
const MenuItems = ({headerMenuItems, currentMenuItem, setCurrentMenuItem}:MenuItemsProps) => {
       
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Use cases</div>      
      <ul className={s.headerMenuItems}>
        {
          headerMenuItems.map((item, i) => {
            return <li onClick={() => setCurrentMenuItem(i)} className={`${s.headerMenuItem} ${currentMenuItem} ${currentMenuItem == i ? s.active : ''}`} key={i}>
            <span>
            {item}  
            </span>
              <svg className={s.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.95">
                  <path d="M9.33332 4L13.3333 8L9.33332 12M12.6667 8H2.66666" stroke="#151517" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default MenuItems;