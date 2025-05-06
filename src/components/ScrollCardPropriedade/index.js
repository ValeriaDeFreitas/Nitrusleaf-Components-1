import styles from '@/components/ScrollCardPropriedade/Scrollcard.module.css'
import { CardScrollPrimary } from '../componentsCard';

const ScrollCard = () => {
    const cardsData = [
      { id: 1, title: 'Card 1', content: 'Conteúdo do Card 1' },
      { id: 2, title: 'Card 2', content: 'Conteúdo do Card 2' },
      { id: 3, title: 'Card 3', content: 'Conteúdo do Card 3' },
    ];
  
    return (
        <div className={styles.containerScroll}>
          {cardsData.map((card) => (
            <div className={styles.Card} key={card.id}>
              <CardScrollPrimary title={card.title} content={card.content} />
            </div>
          ))}
        </div>
      );
    };

export default ScrollCard;
