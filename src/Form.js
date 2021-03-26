import React, { Component } from 'react'


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            description:''
        }
    }

    handleSubmit = (event) => {
        this.props.add(this.state.title,this.state.description);
        this.setState ({
            title:'',
            description: ''
        })
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label className="col-form-label">Title</label>
                    <input className="form-control" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div>
                    <label className="col-form-label">Description</label>
                    <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                </div>
                <button className="btn btn-primary mt-3 mb-3" >Add</button>
            </form>
        )
    }
}
