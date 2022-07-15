import React from "react";

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    handleSubmit(e) {
        console.log("submitted", this.state);
        e.preventDefault()
    }

    inputHandler(e) {
        console.log(e.target.name); // name - password
        // this.setState({name: e.target.value});

        this.setState({
            [e.target.name]: e.target.value
        })
    }



  render() {
    return(
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Name: </label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.inputHandler(e)} />

            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.inputHandler(e)} />
            <input type="submit" />
        </form>
    )
  }
}
