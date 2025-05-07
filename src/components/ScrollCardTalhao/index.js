import styles from "@/components/ScrollCardTalhao/ScrollCardTalhao.module.css";
import { CardScrollSecondary } from "../componentsCard";

const ScrollCardTalhao = () => {

  // Fazer uma função que pega os dados dos talhoes e fazer eles aparecerem no card
  const cardsData = [
    { id: 1, title: "Card 1", status: "não-tratado", percentage: "35" },
    { id: 2, title: "Card 2", status: "tratado", percentage: "5" },
    { id: 3, title: "Card 3", status: "sem-informações", percentage: "50" },
  ];

  return (
    <div className={styles.ScrollCardTalhao}>
      <div className={styles.MenuTalhao}>
        <h3 className={styles.Text}>Talhao 1</h3>
        <button className={styles.ButtonTalhao}>
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.9999 39L30.3139 30.314M30.3139 30.314C31.7997 28.8282 32.9783 27.0643 33.7824 25.1231C34.5865 23.1818 35.0003 21.1012 35.0003 19C35.0003 16.8988 34.5865 14.8182 33.7824 12.8769C32.9783 10.9356 31.7997 9.17176 30.3139 7.68599C28.8281 6.20021 27.0643 5.02163 25.123 4.21753C23.1818 3.41344 21.1011 2.99957 18.9999 2.99957C16.8987 2.99957 14.8181 3.41344 12.8768 4.21753C10.9356 5.02163 9.1717 6.20021 7.68592 7.68599C4.68526 10.6866 2.99951 14.7564 2.99951 19C2.99951 23.2436 4.68526 27.3133 7.68592 30.314C10.6866 33.3146 14.7564 35.0004 18.9999 35.0004C23.2435 35.0004 27.3133 33.3146 30.3139 30.314Z"
              stroke="#351102"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className={styles.ButtonTalhao}>
          <svg
            width="61"
            height="53"
            viewBox="0 0 61 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6876 44.1666C26.6876 45.0452 27.0893 45.8877 27.8042 46.5089C28.5192 47.1301 29.4889 47.4791 30.5001 47.4791C31.5112 47.4791 32.4809 47.1301 33.1959 46.5089C33.9109 45.8877 34.3126 45.0452 34.3126 44.1666V29.8125H50.8334C51.8446 29.8125 52.8143 29.4635 53.5293 28.8423C54.2442 28.2211 54.6459 27.3785 54.6459 26.5C54.6459 25.6215 54.2442 24.7789 53.5293 24.1577C52.8143 23.5365 51.8446 23.1875 50.8334 23.1875H34.3126V8.83331C34.3126 7.95478 33.9109 7.11224 33.1959 6.49102C32.4809 5.86981 31.5112 5.52081 30.5001 5.52081C29.4889 5.52081 28.5192 5.86981 27.8042 6.49102C27.0893 7.11224 26.6876 7.95478 26.6876 8.83331V23.1875H10.1667C9.15561 23.1875 8.18589 23.5365 7.4709 24.1577C6.75592 24.7789 6.35425 25.6215 6.35425 26.5C6.35425 27.3785 6.75592 28.2211 7.4709 28.8423C8.18589 29.4635 9.15561 29.8125 10.1667 29.8125H26.6876V44.1666Z"
              fill="#351102"
            />
          </svg>
        </button>
        <button className={styles.ButtonTalhao}>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5427 36.5725L24.7722 36.5409L44.9168 16.5003C45.7073 15.7063 46.1423 14.6517 46.1423 13.5299C46.1423 12.4082 45.7073 11.3536 44.9168 10.5596L41.5998 7.22785C40.0187 5.63973 37.2601 5.64813 35.6915 7.22155L15.5427 27.2664V36.5725ZM38.6425 10.1982L41.9658 13.5236L38.6258 16.8469L35.3088 13.5173L38.6425 10.1982ZM19.7256 29.0184L32.3369 16.4709L35.6539 19.8026L23.0447 32.3459L19.7256 32.3564V29.0184Z"
              fill="black"
            />
            <path
              d="M11.3598 44.9479H40.6398C42.9466 44.9479 44.8226 43.0636 44.8226 40.7465V22.5377L40.6398 26.7391V40.7465H17.9646C17.9102 40.7465 17.8537 40.7675 17.7993 40.7675C17.7303 40.7675 17.6613 40.7486 17.5902 40.7465H11.3598V11.3368H25.6798L29.8627 7.13538H11.3598C9.05301 7.13538 7.177 9.0197 7.177 11.3368V40.7465C7.177 43.0636 9.05301 44.9479 11.3598 44.9479Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      {cardsData.map((card) => (
        <div className={styles.CardScrollSecondary} key={card.id}>
          <CardScrollSecondary
            title={card.title}
            status={card.status}
            percentage={card.percentage}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollCardTalhao;
