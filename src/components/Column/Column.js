import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {Droppable} from 'react-beautiful-dnd';



class Column extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    removeCard: PropTypes.func,
    id: PropTypes.string,
    markDone: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {title, icon, cards, addCard, id, removeCard, markDone} = this.props;
    console.log(cards);
    return (    
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        
        <Droppable droppableId={id}>
          {provided => (
            <div
              className={styles.cards}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map(cardData => 
                <Card key={cardData.id} {...cardData} action={() => removeCard(cardData.id)} doneAction={() => markDone(cardData.id)} />
              )}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
       
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
          
      </section>
      

    );
  }
}
export default Column;