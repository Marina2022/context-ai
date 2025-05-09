import s from './LogosBlock.module.scss';

const LogosBlock = () => {

  const logosArray = Array.from({length: 18}, (_, i) => i + 1)

  return (

    <div className='container'>

      <ul className={s.logoWrapper}>
        {
          logosArray.map((logo, i) => {
            return <li key={i}><img src={`/img/megaMenuPage/logos/${logo}.svg`} alt={`logo-${logo}`}/></li>
          })
        }
      </ul>
    </div>
  );
};

export default LogosBlock;