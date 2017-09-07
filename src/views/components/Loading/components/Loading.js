import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Loading.css'
import Scroll from 'react-scroll';
import classNames from 'classnames'
import {connect} from 'react-redux'
import { Input } from 'semantic-ui-react'
import $ from 'jquery';
import {bindActionCreators} from 'redux'
import 'public/coinrexlogow.svg'
import 'public/coinrexlogoB.svg'
import 'public/coinrexheadlogo.svg'
import 'public/coinrexheadlogo2.svg'


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
        return (
          <div className='loadingScreen flexx'>
            <h1 className='loadingHeader'> Loading... </h1>
            <img className='kaaapaa' src='/coinrexlogoB.svg'></img>
          </div>
        )
    }
  }



export default Loading
