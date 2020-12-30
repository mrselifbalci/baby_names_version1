import React, { Component } from "react";
import Favorite from './Favorite'


export default class AllNames extends Component {
constructor(props){
  super(props)
  this.state={
    fav:[]
  }
}
   
  favorite=(id)=>{
    this.setState({
      fav:
      [this.props.names.map((item)=>{
        if(item.id===id){
          return [...this.state.fav,...[item.name]]
        }
    })]
    })

}


  render() {
    return (
      <div>
        <Favorite  fav={this.state.fav} />
       
        {this.props.names.map((name) => {
          if (name.sex === "f") {
            return (
              <button onClick={()=>this.favorite(name.id)} key={name.id} style={{ backgroundColor: "pink",borderColor:'white',margin:'2px' }}>
                {name.name}
              </button>
            );
          } else if (name.sex === "m") {
            return (
              <button onClick={()=>this.favorite(name.id)} key={name.id} style={{ backgroundColor: "#46CBE9",borderColor:'white',margin:'2px' }}>
                {name.name}
              </button>
            );
          }
        })}
        
      </div>
      
    );
  }
}
