import React from "react";
import { Form, } from "semantic-ui-react";

class SongForm extends React.Component {
  state = { title: "", artist: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    // Call a function to add a contact to state
    // Where should this function be defined???
    this.props.addSong({
        title: this.state.title,
        artist: this.state.artist,
        id: Math.random()
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 
// 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Title" 
            placeholder="Title" 
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Artist" 
            placeholder="Artist" 
            name="artist" 
            value={this.state.artist} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default SongForm;