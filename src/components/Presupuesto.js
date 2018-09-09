import React from 'react';
import PropTypes from 'prop-types';

class Presupuesto extends React.Component {

	render(){
		return (
			<div className="alert alert-primary">
				Presupuesto: $ {this.props.presupuesto}.-
			</div>
		)
	}
}

Presupuesto.propType = {
		presupuesto : PropTypes.string.isRequired
}

export default Presupuesto;
