import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Ball from './Ball';
import Block from './Block';

class DndContainer extends React.PureComponent {
	render() {
		const styles = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			marginTop: '100px',
		}

		return (
			<div style={styles}>
				<div style={{display: 'flex', marginBottom: '100px'}}>
					<Ball color="red" />
					<Ball color="blue" />
					<Ball color="black" />
				</div>
				<Block />
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(DndContainer);