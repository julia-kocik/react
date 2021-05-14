import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';
import {DragDropContext} from 'react-beautiful-dnd';


class List extends React.Component {
    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array, 
      image: PropTypes.string, 
      addColumn: PropTypes.func, 
      moveCard: PropTypes.func,
    }
    static defaultProps = {
      description: settings.defaultListDescription,
    }
    render() {
      const {title, image, description, columns, addColumn, moveCard} = this.props;
      const moveCardHandler = result => {
        if(
          result.destination
          &&
          (
            result.destination.index != result.source.index
            ||
            result.destination.droppableId != result.source.droppableId
          )
        ){
          moveCard({
            id: result.draggableId,
            dest: {
              index: result.destination.index,
              columnId: result.destination.droppableId,
            },
            src: {
              index: result.source.index,
              columnId: result.source.droppableId,
            },
          });
        }
      };
      return (
        <DragDropContext onDragEnd={moveCardHandler}>
          <Container>
            <section className={styles.component}>
              <Hero titleText={title} imageSrc={image}/>
              <div className={styles.description}>
                {ReactHtmlParser(description)}
              </div>
          
              <div className={styles.columns}>
                {columns.map(columnData => (
                  <Column key={columnData.id} {...columnData} />
                ))}
              </div>
          
              <div className={styles.creator}>
                <Creator text={settings.columnCreatorText} action={addColumn}/>
              </div>
            </section>
          </Container>
        </DragDropContext>
      );
    }
}

export default List;
