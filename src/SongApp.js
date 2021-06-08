import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Songs from './Songs'
import SongForm from './SongForm'

class SongApp extends React.Component {
    state = { 
        songs: [
          { id: 1, title: "song", artist: "artist", },
          { id: 2, title: "song", artist: "artist", },
          { id: 3, title: "song", artist: "artist", },
        ],
    }
    addSong = (song) => {
        let newSongs = [...this.state.songs, song]
        this.setState({
            songs: newSongs
        })
    }
    deleteSong =(id)=>{
        let newSongs = this.state.songs.filter( s => s.id !== id)
        this.setState({
            songs: newSongs
        })
    }
    render(){
        return (
            <Container>
                <Header as='h1'>song list</Header>
                <SongForm addSong={this.addSong}/>
                <Songs deleteSong={this.deleteSong} songs={this.state.songs}/>
            </Container>
        )
    }
}
export default SongApp