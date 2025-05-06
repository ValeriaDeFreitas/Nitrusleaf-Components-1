import styles from '@/components/ScrollCardTalhao/ScrollCardTalhao.module.css'
import { CardScrollSecondary } from '../componentsCard';

const ScrollCardTalhao = () => {
    const cardsData = [
      { id: 1, title: 'Card 1', status:'não-tratado', percentage:'35'  },
      { id: 2, title: 'Card 2', status:'tratado', percentage:'5'  },
      { id: 3, title: 'Card 3', status:'sem-informações', percentage:'50'  }
    ];
  
    return (
        <div className={styles.containerScrollSecondary}>
          {cardsData.map((card) => (
            <div className={styles.CardSecondary} key={card.id}>
              <CardScrollSecondary title={card.title} status={card.status} percentage={card.percentage} />
            </div>
          ))}
        </div>
      );
    };

export default ScrollCardTalhao;
