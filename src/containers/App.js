import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ScrollView from '../components/ScrollView';
import ErrorBounding from '../components/ErrorBounding';
import {robots} from '../components/robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }
    onSearchChange = (event) => {
       this.setState({searchfield :event.target.value});
    }

    render() {
        const filtered = this.state.robots.filter(robot => {
           return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return(
            <div className="tc">
                <h1 style={{fontFamily:'Technology', fontSize: '60px'}}>ROBO FRIENDS</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <ScrollView>
                    <ErrorBounding>
                       <CardList robots= {filtered} />
                    </ErrorBounding>
                </ScrollView>
               
            </div>
        )
    }
}

export default App;