import React, { Component } from 'react'
import uuid from 'react-uuid';
import Form from './Form';
import Row from './Row';
import Todo from './Todo';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state={todos: new Array(new Todo('Test 1', 'Test description'))}
    }


    addToList = (title, description) => {
        this.setState(prevState => ({
            todos: [...prevState.todos, new Todo(title,description)]
        }))
    }

    render() {
        return (
            <>
            <h3>Todos</h3>
            <Form add={this.addToList} />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map(item => (
                        <Row key={uuid()} title={item.title} description={item.description} />
                    ))}
                </tbody>
            </table>               
            </>
        )
    }
}
