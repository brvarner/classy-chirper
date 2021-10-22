import React from "react";
import ChirpWriter from "./components/ChirpWriter";
import ChirpContainer from "./components/ChirpContainer";
import { v4 as uuidv4 } from "uuid"
import moment from "moment";

class App extends React.Component {
    constructor(props) {
        super(props)
        let now = moment().fromNow()
        this.state = {
            username: '',
            newChirp: '',
            chirps: [
                { id: uuidv4(), username: `Dellarunner`, newChirp: 'Has anyone tried Ring Fit Adventure? Seems like a great way to get in some exercise at home!', time: now },
                { id: uuidv4(), username: `CoolFan07`, newChirp: 'Just put my life savings into #StonkCoin!', time: now },
                { id: uuidv4(), username: `StonkInfluencer`, newChirp: `I've read that LOSERS are the only ones who buy stonkcoin, divesting immediately`, time: now },
            ]
        }
    }

    handleUsernameChange = e => this.setState({ username: e.target.value })
    handleNewChirpChange = e => this.setState({ newChirp: e.target.value })

    handleSubmit(e){
        e.preventDefault()
        let now = moment().fromNow()
        this.setState({
            chirps: [
            { id: uuidv4(), 
            username: this.state.username,
             newChirp: this.state.newChirp, 
             time: now},
            ...this.state.chirps
        ], 
        username: '',
        newChirp: ''})
    }


    render() {
        return (
            <div className="container row justify-content-between align-items-start">

                <ChirpWriter chirps={this.state.chirps} 
                username={this.state.username} 
                handleUsernameChange={this.handleUsernameChange}
                newChirp={this.state.newChirp}
                handleNewChirpChange={this.handleNewChirpChange} 
                handleSubmit={e => this.handleSubmit(e)}/>

                <ChirpContainer chirps={this.state.chirps} />
            </div>
        )
    }
}

export default App