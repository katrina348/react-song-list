import React from 'react';
import {Button, Table} from "semantic-ui-react"

export default class Song extends React.Component {
  render(){
    return (
      <Table.Row>
        <Table.Cell>
          {this.props.title}
        </Table.Cell>
        <Table.Cell>
          {this.props.artist}
          </Table.Cell>
        <Table.Cell>
          <Button onClick={()=>this.props.deleteSong(this.props.id)} color='purple'>Delete: {this.props.id}</Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}
