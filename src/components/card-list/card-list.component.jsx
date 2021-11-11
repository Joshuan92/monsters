/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types'
import React from 'react'

import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = ({ monsters, loading }) => {
	if (loading) return <div>...</div>
	return (
		<div className='card-list'>
			{monsters.map((monster) => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	)
}

CardList.propTypes = {
	monsters: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
}
