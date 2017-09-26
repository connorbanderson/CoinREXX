import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { authActions } from 'src/auth';
import Scroll from 'react-scroll';
import classNames from 'classnames'
import { Input } from 'semantic-ui-react'
import { Button } from 'antd'
import { Transition } from 'react-transition-group';
import { ReactTimeout } from 'react-timeout'

import $ from 'jquery';
import './portfolio.css'
import 'public/cbalogoentrance.svg'





class Landing2 extends React.Component {

  constructor( props ){
    super(props)
    console.log('het there state is', this.state);
    this.state = {
      isHidden: true,
      transition: false,
      selectionMade: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll(e){
    let kappa = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                 document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ) / 2
    if (window.scrollY > (kappa/2)) {
      this.setState({ isHidden: false })
    }
    else if (window.scrollY < (kappa/2)) {
      this.setState({ isHidden: true })
    }
  }


  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }


scrollBottom(){
  let scroll = Scroll.animateScroll;
  scroll.scrollTo((Math.max(document.body.scrollHeight, document.body.offsetHeight,
               document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ) / 2), 2000)
}

scrollTop(){
  let scroll = Scroll.animateScroll;
  scroll.scrollTo(0, 2000)
}


unmountLandingPage = () => {
  console.log('indside unmountLandingPage');
  this.setState({ selectionMade: true })
}

handleUnmount = (e) => {
  console.log('indside handleUnmount');
  this.setState({transition: true})
  setTimeout(() => {this.setState({selectionMade: true})}, 3000)
}

  entrance = () =>{
    console.log('inside entrance');
    let landingSVG = classNames({
      'landingSVG': true,
      'landingSVGTransition': this.state.transition,
    })
    let cloudWrapper = classNames({
      'cloudWrapperTransition': this.state.transition,
    })
    let professionalPage = classNames({
      'professionalPageTransition': this.state.transition,
      'professionalPage': true
    })
    let landingBody = classNames({
      'landingBody': true,
      'noselect': true,
      'flexx': true
    })
    let professionalDiv = classNames({
      'professionalDiv': true,
      'proTransition': this.state.transition,
      'flexx': true
    })
    let personalDiv = classNames({
      'personalDiv':  true,
      'personalDivTransition': this.state.transition,
      'flexx': true
    })
    if (!this.state.selectionMade) return(
      <div className={landingBody} >
        <img className={landingSVG} src='/landingMeteor.svg'></img>
        <div className={personalDiv} onClick={this.handleUnmount}>
          <img className='personalSVG' src='/personalIsland2.svg'></img>
        </div>
        <div className={professionalDiv} onClick={this.handleUnmount}>
          <img className='professionalSVG' src='/professionalIsland4.svg'></img>
        </div>
        <div className={cloudWrapper}>
          <img className='cloud cloudSVG1' src='/cloud1.svg'></img>
          <img className='cloud cloudSVG2' src='/cloud2.svg'></img>
          <img className='cloud cloudSVG3' src='/cloud3.svg'></img>
          <img className='cloud cloudSVG4' src='/cloud4.svg'></img>
        </div>
      </div>
    )
    else return
  }

  render () {



    return (
      <div className='theBody'>
      {this.entrance()}
      </div>
    )
  }
}

export default Landing2
