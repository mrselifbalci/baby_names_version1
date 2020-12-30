
import React, { Component } from 'react'

 

export default class Input extends Component {
constructor(props){
    super(props)
}

    render() {
        
        return (
            <div>
             <input onChange={this.props.filterNames} type="text" placeholder="Enter a name..."></input>
                <button onClick={this.props.defaultNames} style={{backgroundColor:'#f3f3f3', borderColor:'white',margin:'2px'}}>All</button>
                <button onClick={this.props.onlyBoys} style={{backgroundColor:'#46CBE9', borderColor:'white',margin:'2px'}} >Boys</button>
                <button onClick={this.props.onlyGirls} style={{backgroundColor:'pink', borderColor:'white',margin:'2px'}}>Girls</button>
            </div>
        )
    }
}
