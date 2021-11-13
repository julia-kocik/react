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
    }
    static defaultProps = {
      isDraggable: true,
    }
    render() {
      const {title, id, index, isDraggable, action} = this.props;
      if(isDraggable) {
        return (
          <section>
            <Draggable draggableId={id} index={index}>
              {(provided) => (
                <article
                  className={styles.component}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  {title}
                  <Icon name='trash' handleClick={action}/>
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