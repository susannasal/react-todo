import React, { Component } from 'react'
import List from './List';

export default class Todo extends Component {
    title= '';
    description = ''

    constructor(title, description) {
        super();
        this.title = title;
        this.description = description;
    }


    render() {
        return (
            <List />
        )
    }
}
