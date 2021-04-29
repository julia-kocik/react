import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        titleOne: PropTypes.string.isRequired,
        titleTwo: PropTypes.string.isRequired,
        titleThree: PropTypes.string.isRequired,
    }
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}></h3>
                <div className={styles.title}>{this.props.titleOne}</div>
                <div className={styles.title}>{this.props.titleTwo}</div>
                <div className={styles.title}>{this.props.titleThree}</div>
            </section>
        )
    }
}

export default Column;