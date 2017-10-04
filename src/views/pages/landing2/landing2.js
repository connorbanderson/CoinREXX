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
import './portfolio.css'


class Landing2 extends React.Component {

  constructor( props ){
    super(props)
    console.log('het there state is', this.state);
    this.state = {
      isHidden: true,
      transition: false,
      selectionMade: 'entered'
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
scrollTopInsta(){
  let scroll = Scroll.animateScroll;
  scroll.scrollTo(0, 500)
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

viewPortfolio = () =>{
  this.setState({ selectionMade: 'viewPortfolio' })
}
closePortfolio = () =>{
  this.setState({ selectionMade: 'entered' })
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
    if (this.state.selectionMade == 'landing') return(
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
    else if (this.state.selectionMade == 'entered') return(
      <div className='portfolioBooty'>
        <div className='navbarTopBefore noselect'>
          <div onClick={()=>{this.scrollTop()}} className='leftHeader'>
            <img src='/cloud5.svg' />
          </div>
          <div className='rightHeader'>
              <h3> About Me </h3>
              <h3> Portfolio </h3>
              <h3> Education </h3>
              <h3> Learn More </h3>
          </div>
        </div>

        <div className='pageOne noselect'>
          <div className='background' />
          <div className='innerContent flexx'>
            <div className='headerWrapper'>
              <img className='centerLogo' src='/cloud5.svg' />
              <div className='socialWrapper'>
                <a href="https://www.linkedin.com/in/connor-anderson-34607999/">
                  <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/krnzsti/">
                  <i  className="fa fa-instagram fa-4x" aria-hidden="true" />
                </a>
                <a href="https://github.com/connorbanderson">
                  <i  className="fa fa-github fa-4x" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='pageTwo'>
          <div className='portfolioWrapper'>
            <div className='headerWrapper'>
              <h1>About Me</h1>
            </div>
            <div className='paraWrapper'>
              <p>
                This website is a passion project to to show my recent projects, my interests, both related to front end web development and my life in general.
              </p>
            </div>
          </div>
        </div>

        <div className='pageThree'>
          <img className='coinRexLogo' src='/coinrexlogoBnoa.svg' />

          <div className='s1 flexx'>
            <img className='stacks' src='/coinrexStacks.svg' />
            <Link to={`/dashboard`} className='nodecoration flexx'>
              <div className='head noselect'>
                <h1> Coin REX</h1>
                <h2> REACT | REDUX </h2>
                <h3> FIREBASE (Coming Soon) </h3>
              </div>
            </Link>
          </div>


          <div className='s2 flexx' onClick={()=>{ {this.viewPortfolio()} {this.scrollTopInsta()} }}>
              <img className='piece2' src='/space2.svg' />
              <div className='head noselect'>
                <h1> Flat Design </h1>
                <h2> Adobe Illustrator </h2>
              </div>
          </div>


        </div>

        <div className='pageFour'>
          <img className='map' src='/map3.svg' />
        </div>

        <div className='pageFive'>
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">Learn More</div>
          </div>
        </div>

      </div>
    )
    else if (this.state.selectionMade == 'viewPortfolio') return (
      <div className='portfolioPage'>
        <i onClick={()=>{this.closePortfolio()}}
            className="fa fa-5x fa-window-close" aria-hidden="true" />

        <div className='p p1'>

        </div>
        <div className='p p2'>

        </div>
        <div className='p p3'>

        </div>
        <div className='p p4'>

        </div>
        <div className='p p5'>

        </div>
        <div className='p p6'>

        </div>
        <div className='p p7'>

        </div>
        <div className='p p8'>

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

/*

<Link to={`/dashboard`} className='nodecoration'>


*/
