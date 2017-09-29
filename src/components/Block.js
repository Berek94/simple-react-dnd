import React from 'react';
import {DropTarget} from 'react-dnd';

const BlockSpec = {
	drop() { //props, monitor
		return {name: 'BLOCK'};
	},
	canDrop() {return true}, //props, monitor
};

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
};

class Block extends React.PureComponent {
	render() {
		const styles = {
			height: '100px',
			width: '400px',
			border: '2px dashed gray',
			color: 'bff4be',
			backgroundColor: 'white',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}
		const {canDrop, isOver, connectDropTarget} = this.props;
		const isActive = canDrop && isOver;
		const backgroundColor = isActive ? '#bff4be' : 'white';

		return connectDropTarget(
			<div style={{...styles, backgroundColor}}>
				{isActive ? 'Бросай!' : 'Drag Here !!!'}
			</div>
		);
	}
}

export default DropTarget("BALL", BlockSpec, collect)(Block);