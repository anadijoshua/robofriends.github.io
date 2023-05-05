import React, {Component} from 'react';

//Components
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollView from '../components/ScrollView';
import ErrorBounding from '../components/ErrorBounding';

//React Redux
import {connect} from 'react-redux';

//action
import { setSearchField } from '../components/action';

//Robots Database
// import  {robots} from '../components/robots';

//CSS
import './App.css'


const mapStateToProps = (state) => {
   return{
     searchField: state.searchField
   }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{
    constructor() {
        super();

        this.state = {
            robots: []
            
        }
 }

 componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>  this.setState({ robots: users}))
 }




    render() {
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 id='robo'>ROBO FRIENDS</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <ScrollView>
                    <ErrorBounding>
                         <CardList robots = {filtered} /> 
                    </ErrorBounding>
                </ScrollView>
                
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
