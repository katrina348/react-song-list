import React from "react";
import { Button, Table, } from "semantic-ui-react";
import Song from "./Song";

class Songs extends React.Component {
  render(){
    return(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {this.props.songs.map(s => <Song deleteSong={this.props.deleteSong} key ={s.id} {...s}/>)}
        </Table.Body>
      </Table>
    )
  }
}

export default Songs;