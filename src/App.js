import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from './components/CardList.js';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from './actions'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		err: state.requestRobots.err
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { robots,searchField,isPending,onSearchChange } = this.props
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending
		?	<div className='tc ma7'>
				<h1>LOADING...</h1>
			</div>
		:	<div className='tc'>
				<h1 className='f1'>Robots</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList Robots={filteredRobots}/>
				</Scroll>
			</div>
	}
}
	

export default connect(mapStateToProps,mapDispatchToProps)(App);