import s from './Item1Content.module.scss';

const Item1Content = () => {
  return (
    <div>
      <div className={s.title}>
        Management consulting use case
      </div>
      <div className={s.titleMobile}>
        use cases
      </div>

      <ul className={s.list}>
        <li className={s.listItem}>
          <div className={s.iconWrapper}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.33333 2C2.59695 2 2 2.59695 2 3.33333V7.33333H4.92131C5.42634 7.33333 5.88803 7.61867 6.11388 8.0704L6.66667 9.17593L8.73707 5.03519C8.85 4.80933 9.0808 4.66667 9.33333 4.66667C9.58587 4.66667 9.81667 4.80933 9.9296 5.03519L11.0787 7.33333H14V3.33333C14 2.59695 13.4031 2 12.6667 2H3.33333Z"
                fill="#151517" fillOpacity="0.88"/>
              <path
                d="M14 8.66665H11.0787C10.5737 8.66665 10.112 8.38132 9.88613 7.92958L9.33333 6.82405L7.26293 10.9648C7.15 11.1907 6.9192 11.3333 6.66667 11.3333C6.41415 11.3333 6.18331 11.1907 6.07038 10.9648L4.92131 8.66665H2V12.6667C2 13.4031 2.59695 14 3.33333 14H12.6667C13.4031 14 14 13.4031 14 12.6667V8.66665Z"
                fill="#151517" fillOpacity="0.88"/>
            </svg>
          </div>
          <div>
            <h4 className={s.subtitle}>Market Entry Analysis.</h4>
            <p className={s.text}>Instantly source market data, relevant
              case studies, and strategy benchmarks.</p>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.iconWrapper}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M0.666687 2.66667C0.666687 2.29848 0.965167 2 1.33335 2H14.6667C15.0349 2 15.3334 2.29848 15.3334 2.66667C15.3334 3.03485 15.0349 3.33333 14.6667 3.33333H14V9.33333C14 10.8061 12.8061 12 11.3334 12H9.24569L9.88809 12.9635C10.0923 13.2699 10.0095 13.6838 9.70315 13.8881C9.39682 14.0923 8.98289 14.0095 8.77862 13.7031L8.00002 12.5352L7.22142 13.7031C7.01715 14.0095 6.60324 14.0923 6.29689 13.8881C5.99053 13.6838 5.90775 13.2699 6.11199 12.9635L6.75435 12H4.66669C3.19393 12 2.00002 10.8061 2.00002 9.33333V3.33333H1.33335C0.965167 3.33333 0.666687 3.03485 0.666687 2.66667ZM8.66669 5.33333C8.66669 4.96515 8.36822 4.66667 8.00002 4.66667C7.63182 4.66667 7.33335 4.96515 7.33335 5.33333V8.66667C7.33335 9.03487 7.63182 9.33333 8.00002 9.33333C8.36822 9.33333 8.66669 9.03487 8.66669 8.66667V5.33333ZM11.3334 6.66667C11.3334 6.29848 11.0349 6 10.6667 6C10.2985 6 10 6.29848 10 6.66667V8.66667C10 9.03487 10.2985 9.33333 10.6667 9.33333C11.0349 9.33333 11.3334 9.03487 11.3334 8.66667V6.66667ZM6.00002 8C6.00002 7.6318 5.70154 7.33333 5.33335 7.33333C4.96517 7.33333 4.66669 7.6318 4.66669 8V8.66667C4.66669 9.03487 4.96517 9.33333 5.33335 9.33333C5.70154 9.33333 6.00002 9.03487 6.00002 8.66667V8Z"
                    fill="#151517" fillOpacity="0.88"/>
            </svg>
          </div>
          <div>
            <h4 className={s.subtitle}>Client Presentation Generation.</h4>
            <p className={s.text}>Convert complex research into polished
              client-ready slides in seconds.</p>
          </div>
        </li>

        <li className={s.listItem}>
          <div className={s.iconWrapper}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.66667 2H12.2879C12.4562 1.99998 12.6201 1.99996 12.7588 2.0113C12.9112 2.02375 13.0911 2.05313 13.272 2.14533C13.5229 2.27316 13.7269 2.47714 13.8547 2.72802C13.9469 2.90897 13.9763 3.08879 13.9887 3.24119C14.0001 3.37993 14 3.54382 14 3.71204V12.288C14 12.4563 14.0001 12.6201 13.9887 12.7588C13.9763 12.9112 13.9469 13.0911 13.8547 13.272C13.7269 13.5229 13.5229 13.7269 13.272 13.8547C13.0911 13.9469 12.9112 13.9763 12.7588 13.9887C12.6201 14.0001 12.4562 14 12.288 14H3.71198C3.54377 14 3.37993 14.0001 3.24119 13.9887C3.08879 13.9763 2.90897 13.9469 2.72802 13.8547C2.47714 13.7269 2.27316 13.5229 2.14533 13.272C2.05313 13.0911 2.02375 12.9112 2.0113 12.7588C1.99996 12.6201 1.99998 12.4562 2 12.2879V7.33333H7.33333V14H8.66667V10H14V8.66667H8.66667V2Z"
                fill="#151517" fillOpacity="0.88"/>
              <path
                d="M2 6H7.33334V2H3.71208C3.54382 1.99998 3.37996 1.99996 3.24119 2.0113C3.08879 2.02375 2.90897 2.05313 2.72802 2.14533C2.47714 2.27316 2.27316 2.47714 2.14533 2.72802C2.05313 2.90897 2.02375 3.08879 2.0113 3.24119C1.99996 3.37996 1.99998 3.54382 2 3.71206V6Z"
                fill="#151517" fillOpacity="0.88"/>
            </svg>
          </div>
          <div>
            <h4 className={s.subtitle}>Competitive Landscaping.</h4>
            <p className={s.text}>Identify key competitors, analyze metrics, and visualize positioning.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Item1Content;