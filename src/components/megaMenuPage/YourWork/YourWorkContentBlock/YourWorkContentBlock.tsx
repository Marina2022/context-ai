'use client'
import s from './YourWorkContentBlock.module.scss';
import {useState} from "react";
import Link from "next/link";

const YourWorkContentBlock = () => {

  const [activeBtnIndex, setActiveBtnIndex] = useState(0)

  return (
    <>
      <div className={s.yourWorkContentBlock}>
        <div className={s.innerBlock}>
          <div className={s.innerBlockText}>
            Create a clear, engaging document that explains budgeting basics, investment strategies, personal finance. The
            document should be well structured and formatted in a professional way
          </div>
          <button className={s.innerBlockBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.9346 3.11674C14.1484 2.46722 13.5321 1.85089 12.8825 2.06465L1.36189 5.85626C0.584696 6.11204 0.603056 7.2178 1.38832 7.4476L6.9298 9.06953L8.55167 14.6109C8.78147 15.3962 9.8872 15.4146 10.143 14.6374L13.9346 3.11674Z"
                fill="white"/>
            </svg>
            <span>Try it now</span>
          </button>

        </div>
      </div>

      <div className={s.buttons}>
        <button onClick={() => setActiveBtnIndex(0)} className={activeBtnIndex === 0 ? s.btnActive : s.btn}>
          <svg className={activeBtnIndex === 0 ? s.iconActive : s.icon} width="14" height="18" viewBox="0 0 14 18"
               fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.16667 1.5H2.33333C1.8731 1.5 1.5 1.8731 1.5 2.33333V15.6667C1.5 16.1269 1.8731 16.5 2.33333 16.5H12.3333C12.7936 16.5 13.1667 16.1269 13.1667 15.6667V6.5M8.16667 1.5L13.1667 6.5M8.16667 1.5V5.66667C8.16667 6.1269 8.53975 6.5 9 6.5H13.1667M4.83333 9.83333H7.33333M4.83333 13.1667H10.25"
              strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>Documents</span>
        </button>

        <button onClick={() => setActiveBtnIndex(1)} className={activeBtnIndex === 1 ? s.btnActive : s.btn}>
          <svg className={activeBtnIndex === 1 ? s.iconFillActive : s.iconFill} width="16" height="16"
               viewBox="0 0 16 16" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.16667 1.33334V0.500004H5.5V1.33334H7.16667ZM5.5 14.6667V15.5H7.16667V14.6667H5.5ZM1.33334 5.5H0.500004V7.16667H1.33334V5.5ZM14.6667 7.16667H15.5V5.5H14.6667V7.16667ZM13.8333 2.66667V13.3333H15.5V2.66667H13.8333ZM13.3333 13.8333H2.66667V15.5H13.3333V13.8333ZM2.16667 13.3333V2.66667H0.500004V13.3333H2.16667ZM2.66667 2.16667H13.3333V0.500004H2.66667V2.16667ZM2.66667 13.8333C2.41956 13.8333 2.28435 13.8327 2.1872 13.8248C2.09977 13.8176 2.11875 13.8089 2.16667 13.8333L1.41002 15.3183C1.6362 15.4336 1.86099 15.4703 2.05148 15.4859C2.23225 15.5007 2.44706 15.5 2.66667 15.5V13.8333ZM0.500004 13.3333C0.500004 13.5529 0.499354 13.7678 0.514129 13.9485C0.529687 14.139 0.566413 14.3638 0.681663 14.59L2.16667 13.8333C2.19109 13.8813 2.1824 13.9003 2.17525 13.8128C2.16732 13.7157 2.16667 13.5804 2.16667 13.3333H0.500004ZM2.16667 13.8333L0.681663 14.59C0.841446 14.9036 1.09641 15.1586 1.41002 15.3183L2.16667 13.8333ZM13.8333 13.3333C13.8333 13.5804 13.8327 13.7157 13.8248 13.8128C13.8176 13.9003 13.8089 13.8813 13.8333 13.8333L15.3183 14.59C15.4336 14.3638 15.4703 14.139 15.4859 13.9485C15.5007 13.7678 15.5 13.5529 15.5 13.3333H13.8333ZM13.3333 15.5C13.5529 15.5 13.7678 15.5007 13.9485 15.4859C14.139 15.4703 14.3638 15.4336 14.59 15.3183L13.8333 13.8333C13.8813 13.8089 13.9003 13.8176 13.8128 13.8248C13.7157 13.8327 13.5804 13.8333 13.3333 13.8333V15.5ZM13.8333 13.8333L14.59 15.3183C14.9036 15.1586 15.1586 14.9036 15.3183 14.59L13.8333 13.8333ZM15.5 2.66667C15.5 2.44706 15.5007 2.23225 15.4859 2.05148C15.4703 1.86099 15.4336 1.6362 15.3183 1.41002L13.8333 2.16667C13.8089 2.11875 13.8176 2.09977 13.8248 2.1872C13.8327 2.28435 13.8333 2.41956 13.8333 2.66667H15.5ZM13.3333 2.16667C13.5804 2.16667 13.7157 2.16732 13.8128 2.17525C13.9003 2.1824 13.8813 2.19109 13.8333 2.16667L14.59 0.681663C14.3638 0.566413 14.139 0.529687 13.9485 0.514129C13.7678 0.499354 13.5529 0.500004 13.3333 0.500004V2.16667ZM15.3183 1.41002C15.1586 1.09641 14.9036 0.841446 14.59 0.681663L13.8333 2.16667L15.3183 1.41002ZM2.16667 2.66667C2.16667 2.41956 2.16732 2.28435 2.17525 2.1872C2.1824 2.09977 2.19109 2.11875 2.16667 2.16667L0.681663 1.41002C0.566413 1.6362 0.529687 1.86099 0.514129 2.05148C0.499354 2.23225 0.500004 2.44706 0.500004 2.66667H2.16667ZM2.66667 0.500004C2.44706 0.500004 2.23225 0.499354 2.05148 0.514129C1.86099 0.529687 1.6362 0.566413 1.41002 0.681663L2.16667 2.16667C2.11875 2.19109 2.09977 2.1824 2.1872 2.17525C2.28435 2.16732 2.41956 2.16667 2.66667 2.16667V0.500004ZM2.16667 2.16667L1.41002 0.681663C1.09641 0.841446 0.841446 1.09641 0.681663 1.41002L2.16667 2.16667ZM5.5 1.33334V6.33334H7.16667V1.33334H5.5ZM5.5 6.33334V14.6667H7.16667V6.33334H5.5ZM1.33334 7.16667H6.33334V5.5H1.33334V7.16667ZM6.33334 7.16667H14.6667V5.5H6.33334V7.16667Z"
            />
          </svg>

          <span>Tables</span>
        </button>

        <button onClick={() => setActiveBtnIndex(2)} className={activeBtnIndex === 2 ? s.btnActive : s.btn}>
          <svg className={activeBtnIndex === 2 ? s.iconActive : s.icon} width="19" height="16" viewBox="0 0 19 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.99998 1.33325H16.3333M2.99998 1.33325V11.3333C2.99998 11.7935 3.37308 12.1666 3.83331 12.1666H15.5C15.9602 12.1666 16.3333 11.7935 16.3333 11.3333V1.33325M2.99998 1.33325H18H16.3333M2.99998 1.33325H1.33331M11.3333 14.6666L9.9444 12.5833M7.99998 14.6666L9.3889 12.5833M9.66665 4.66659V8.83325M6.33331 7.99992V8.83325M13 6.33325V8.83325"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <span>Slides</span>
        </button>
      </div>

      <div className={s.line}>
        <svg width="100%" height="2">
          <line x1="0" y1="1" x2="100%" y2="1"
                stroke="rgba(21, 21, 23, 0.2)"
                strokeWidth="1"
                strokeDasharray="6,6"/>
        </svg>
      </div>
      <p className={s.text}>
        Draft reports, summaries, and business documents in seconds. Context extracts key insights, formats content, and ensures clarity and accuracy.
      </p>

      <Link href="/public" className={s.learnMore}>
        <span>Learn more about documents</span>
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.9974 7.53662V1.53662M8.9974 1.53662H2.9974M8.9974 1.53662L1.16406 9.36995" stroke="#151517"
                strokeOpacity="0.64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </>
  );
};

export default YourWorkContentBlock;