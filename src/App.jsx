import React from "react";
import CardList from './CardList.jsx';
// import { robots } from './robots.jsx';
import SearchBox from './SearchBox';
import './index.css'
import './App.css'
import Scroll from './Scroll.jsx'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }



    componentDidMount() {
        // this.state.robots = ... NEVER DO THIS!!
        // this.setState({robots: robots}) // use this instead 

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )
        .then(users => this.setState({robots: users}))
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if (!this.state.robots.length) {
            return <h1 className="flex justify-center items-center vh-100">Loading</h1>
        } else 
            {
            return (
        <div className="tc">
            <h1>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
    );


        }
            
    }
}

export default App;