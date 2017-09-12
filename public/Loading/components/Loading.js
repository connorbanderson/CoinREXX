import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Loading.scss'
import Scroll from 'react-scroll';
import classNames from 'classnames'
import {connect} from 'react-redux'
import { Input } from 'semantic-ui-react'
import $ from 'jquery';
import { updateCoins } from 'store/reducers/crypto'
import {bindActionCreators} from 'redux'
import '../../../../../public/coinrexlogow.svg'
import '../../../../../public/coinrexlogoB.svg'
import '../../../../../public/coinrexheadlogo.svg'
import '../../../../../public/coinrexheadlogo2.svg'

import { PieChart, Pie, Legend, Tooltip } from 'Recharts'
import { Treemap } from 'react-d3'

class Loading extends Component {

  constructor( props ){
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  componentWillMount(){
  }


 round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  swap(){
    console.log('drroooOOp')
    this.setState({
      isLoaded: true
    })
  }

  render () {
      console.log('suhh', this.state.isLoaded);
      if (this.state.isLoaded == false)
        return (
          <div className='loadingScreen flexx'>
            <h1 className='loadingHeader'> Loading... </h1>
            <img className='kaaapaa' src='./coinrexlogoB.svg'></img>
            <div className='nextButton' onClick={ () =>{this.swap()}} />
          </div>
        )
      else
        return (
          <div className='loadingScreenAfter flexx'>
            <h1 className='loadingHeaderAfter'> Done Loading </h1>
          </div>
        )
    }
  }



export default Loading
