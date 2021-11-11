/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'

import './card.styles.css'

export const Card = (props) => {
	const { id, name, email } = props.monster
	return (
		<div className='card-container'>
			<img
				alt='monster'
				src={`https://robohash.org/${id}?set=set1$size=180x180`}
			></img>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	)
}

Card.propTypes = {
	monster: PropTypes.object,
}
