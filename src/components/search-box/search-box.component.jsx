/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({ searchField, placeholder, handleChange }) => (
	<input
		className='search'
		type='search'
		placeholder={placeholder}
		content={searchField}
		onChange={handleChange}
	/>
)

SearchBox.propTypes = {
	searchField: PropTypes.string,
	placeholder: PropTypes.string,
	handleChange: PropTypes.func,
}
