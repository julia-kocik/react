import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import Icon from '../Icon/Icon';


class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string,
      id: PropTypes.string,
      index: PropTypes.number,
      isDraggable: PropTypes.bool,
      action: PropTypes.func,
      done: PropTypes.bool,
      doneAction: PropTypes.func,
    }
    static defaultProps = {
      isDraggable: true,
    }
    render() {
      const {title, id, index, isDraggable, action, done, doneAction} = this.props;
      if(isDraggable) {
        return (
          <section>
            <Draggable draggableId={id} index={index}>
              {(provided) => (
                <article
                  className={done ? `${styles.component} ${styles.green}` : styles.component}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  {title}
                  <Icon name='trash' handleClick={action}/>
                  <Icon name='check-circle' handleClick={doneAction}/>
                </article>
              )}
            </Draggable>
          </section>
        );
      } else {
        return (     
          <section>            
            <article
              className={styles.component}
            >
              {title}
            </article>                
          </section>
        );
      }
    }
}

export default Card;