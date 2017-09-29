import React from 'react';
import {DragSource} from 'react-dnd';

const BallSpec = {
	beginDrag(props) {
		return {
			color: props.color
		};
	},
	canDrag(props) {
		return props.color !== 'black';
	},
	endDrag(props, monitor) {
		const dragItem = monitor.getItem();
		const dropResult = monitor.getDropResult();
		if (dropResult) {
			console.log(`You dropped ${dragItem.color} ball into ${dropResult.name}`);
		}
	}
};

const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
};

class Ball extends React.PureComponent {
	render() {
		const {color, connectDragSource} = this.props;
		const styles = {
			width: '50px',
			height: '50px',
			borderRadius: '50%',
			margin: '0 10px',
			backgroundColor: color,
			color: 'white',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}

		return connectDragSource(
			<div style={styles}>
				Мяч
			</div>
		);
	}
}

export default DragSource('BALL', BallSpec, collect)(Ball);
