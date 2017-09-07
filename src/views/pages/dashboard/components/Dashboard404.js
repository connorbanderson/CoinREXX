import React, { Component } from 'react'
import './Dashboard.css'

class Dashboard404 extends Component {

  constructor( props ){
    super(props)
    this.state = {
    }
  }


  render () {

      return (
        <div className='fourohfour noselect flexx' >
          <div className='loadinggif'>
          </div>
            <h1 className='top'> 404 </h1>
            <h1 className='bottom'> You seem lost :(</h1>
        </div>
      )
    }

}



export default Dashboard404
