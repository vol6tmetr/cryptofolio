import React, {Component} from 'react';
import axios from 'axios';

export default class Currencies extends Component {
    componentDidMount = () => {
        axios.get("http://localhost:3001/api/v1/currencies/all").then(data => {
            console.log(data)
        })
    }

    render() {
        return(<div><h1>Test</h1></div>)
    }
}