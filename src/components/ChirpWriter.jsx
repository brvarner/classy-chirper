import React from "react";

class ChirpWriter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <main className="container card mt-3 col-3">
                <form className="form-group">
                    <div className="form-group-item my-4">
                        <input value={this.props.username} 
                        onChange={(e) => this.props.handleUsernameChange(e)}
                        placeholder="Username"/>
                    </div>
                    <div className="form-group-item my-4">
                        <textarea value={this.props.newChirp} 
                        onChange={(e) => this.props.handleNewChirpChange(e)}
                        placeholder="Let them Hear Ya!"/>
                    </div>
                    <button className="btn btn-primary mb-2" 
                    onClick={(e) => this.props.handleSubmit(e)}>
                        Chirp
                    </button>
                </form>
            </main>
        )
    }
}

export default ChirpWriter