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
import 'public/cbalogoentrance.svg'

import './entrance.css'
import './professional.css'



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
  setTimeout(() => {this.setState({selectionMade: true})}, 1000)
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
    else return(
      <div className='portfolioBooty'>

        <div className='navbarTopBefore'>
          <h1 className='leftHeader'> CA </h1>
        </div>

        <div className='pageOne noselect'>
          <div className='background' />
          <div className='innerContent flexx'>

          <div className='headerWrapper'>
            <div className='nameWrapper'>
              <h1 className='noselect'>Connor Anderson</h1>
            </div>
            <div className='socialWrapper'>
              <a href="https://www.linkedin.com/in/connor-anderson-34607999/">
                <i className="fa fa-linkedin-square fa-5x" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/krnzsti/">
                <i  className="fa fa-instagram fa-5x" aria-hidden="true" />
              </a>
              <a href="https://github.com/connorbanderson">
                <i  className="fa fa-github fa-5x" aria-hidden="true" />
              </a>
            </div>
          </div>


          </div>
        </div>
        <div className='pageTwo'>

          <div className='portfolioWrapper'>
            <div className='portfolio1 portfolio flexx' />
            <div className='header'>
              <h1> CoinREX </h1>
              <h2> REACT | REDUX | SCSS </h2>
              <h2> JS | ANT D | FIREBASE </h2>
            </div>
          </div>

          <div className='portfolioWrapper flexx'>
            <div className='portfolio2 portfolio flexx' />
            <div className='header noselect'>
              <h1> Flat Design </h1>
              <h2> Adobe Illustrator </h2>
            </div>
          </div>

          <div className='portfolioWrapper flexx'>
            <div className='portfolio3 portfolio flexx' />
            <div className='header noselect'>
              <h1> Photo Editing </h1>
              <h2> Adobe Illustrator </h2>
            </div>
          </div>

          <div className='portfolioWrapper flexx'>
            <div className='portfolio4 portfolio flexx' />
            <div className='header noselect'>
              <h1> Logo Design </h1>
              <h2> Adobe Illustrator </h2>
            </div>
          </div>
        </div>
      </div>
    )
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
