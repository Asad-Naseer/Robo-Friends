import React, { useState, useEffect } from "react";
import CardList from './CardList.jsx';
import SearchBox from './SearchBox';
import './index.css'
import './App.css'

function App() {

    // USING HOOKS: stand naming convention const [state, function]
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    // useEffect by default automatically gets run everytime the function App() gets run. So this is essentially serving the purpose of componentDidMount()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
    },[]) // this second arguement tells useEffect() when to stop because useEffect() runs -by default- everytime the functions runs it will run infinitely becuase App() will keep rerendering everytime useEffect imports our users. useEffect gets users -> app runs -> useEffect runs again, infinite loop. But we can give it [] as the second arguement to tell it to only rerun when the [] -the thing in the second arguement- changes. But this wont change so it useEffect() only runs once, when the App() function runs and we just get the users, then we update them in the cardList by passing filteredRobots.

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        console.log(robots, searchfield)
        if (!robots.length) {
            return <h1 className="flex justify-center items-center vh-100">Loading</h1>
        } else 
            {
            return (
                <div className="tc">
                    <h1>Robo Friends</h1>
                    <button onClick={() => setCount(count+1)}>Click Me!</button>
                    <button className="ma2" onClick={() => setCount(0)}>Reset</button>
                    <div>
                    <p className="dib justify-center pa bg-dark-pink br2 pa2">{`The count is ${count}`}</p>
                    </div>
                    <SearchBox searchChange={onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
                   );
            }
            
    
}

export default App;