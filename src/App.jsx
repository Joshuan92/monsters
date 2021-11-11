import './App.css'
import React from 'react'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			monsters: [],
			loading: true,
			searchField: '',
		}
		this.handleChange = this.handleChange.bind(this)
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const monsters = await response.json()
		this.setState({ monsters: monsters, loading: false })
	}

	filterMonsters(monsters, filter) {
		return monsters.filter((monster) =>
			monster.name.toLowerCase().includes(filter.toLowerCase())
		)
	}

	handleChange(e) {
		this.setState({ searchField: e.target.value })
	}

	render() {
		const { monsters, searchField, loading } = this.state
		return (
			<div className='App'>
				<SearchBox
					placeholder='Search monsters'
					searchField={searchField}
					handleChange={this.handleChange}
				/>
				<CardList
					monsters={this.filterMonsters(monsters, searchField)}
					loading={loading}
				></CardList>
			</div>
		)
	}
}

export default App
