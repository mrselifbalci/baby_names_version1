import React, { Component} from 'react'


export default class Favorite extends Component {




  buttonMaker=(name)=>{
    return <button id={name}>{name}</button>

  }

  render() {
  console.log(this.props.fav)
    return (
      <div>
       
        <p style={{ color: "grey" }}>
          Favorites:Click some names below to add to your shortlist... 
          {this.props.fav.map(item=>{
           return (   
           this.buttonMaker(item)
           )
          })}
        </p>
        
  
        <hr style={{ width: "95%" }} />
      </div>
    )
  }
}
