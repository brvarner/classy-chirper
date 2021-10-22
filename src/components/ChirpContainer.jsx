import React from "react";

class ChirpContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: this.props.chirps,
            disArray: []
        }
    }

    componentDidMount() {
this.chirpLoader()
    }

    componentDidUpdate(prevProps) {
        if(this.props.chirps !== prevProps.chirps){
            this.setState({ disArray: this.props.chirps })
        }
    }

    chirpLoader(){
        setTimeout(() => {this.setState({ disArray: [this.state.chirps[2]]})}, 500)
        setTimeout(() => {this.setState({ disArray: [this.state.chirps[1], ...this.state.disArray]})}, 2000)
        setTimeout(() => {this.setState({ disArray: [this.state.chirps[0], ...this.state.disArray]})}, 3000)
    }

    render() {

        return (
            <div className="col-8 mt-3">
                <ul className="list-group">
                    {this.state.disArray.map(chirp => (
                        <li className="list-group-item" key={chirp.id}>
                            <div className="card-body">
                                <h5 className="card-title">@{chirp.username}</h5>
                                <div className="card-text fs-3">{chirp.newChirp}</div>
                                <div className="text-muted">{chirp.time}</div>
                            </div>
                        </li>)
                    )}
                </ul> 
            </div>
        )
    }
}

export default ChirpContainer