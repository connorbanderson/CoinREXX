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
import SimpleMap from './calgaryMap.js'
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
          <img className='topBar' src='/topBar.svg' />

          <div onClick={()=>{this.scrollTop()}} className='leftHeader'>
            <img src='/tlHeader.svg' />
          </div>
          <div className='rightHeader'>

            <div className='onOffWrapper headetextonoff'>
              <img className='headertext onpush on' src='/aboutMeOn.svg' />
              <img className='headertext off' src='/aboutMeOff.svg' />
            </div>

            <div className='onOffWrapper headetextonoff'>
              <img className='headertext onpush on' src='/workOn.svg' />
              <img className='headertext off' src='/workOff.svg' />
            </div>

            <div className='onOffWrapper headetextonoff'>
              <img className='picstext onpush on' src='/picsOn.svg' />
              <img className='picstext off' src='/picsOff.svg' />
            </div>

            <div className='onOffWrapper headetextonoff'>
              <img className='moretext onpush on' src='/moreOn.svg' />
              <img className='moretext off' src='/moreOff.svg' />
            </div>

          </div>
        </div>

        <div className='pageOne noselect'>
          <div className='background' />
          <div className='innerContent flexx'>
            <div className='headerWrapper'>
              <img className='centerLogo' src='/cloud69.svg' />
              <div className='socialWrapper'>
                <a href="https://www.linkedin.com/in/connor-anderson-34607999/">
                  <div className='onOffWrapper'>
                    <img className='socialSVG off' src='/linkedinOff.svg' />
                    <img className='socialSVG on' src='/linkedinOn.svg' />
                  </div>
                </a>
                <a href="https://www.instagram.com/krnzsti/">
                  <div className='onOffWrapper'>
                    <img className='socialSVG off' src='/instaOff.svg' />
                    <img className='socialSVG on' src='/instaOn.svg' />
                  </div>
                </a>
                <a href="https://github.com/connorbanderson">
                  <div className='onOffWrapper'>
                    <img className='socialSVG off' src='/githubOff.svg' />
                    <img className='socialSVG on' src='/githubOn.svg' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='pageTwo'>
          <div className='portfolioWrapper'>

            <div className='headerWrapper flexx'>
              <h1>Hi.</h1>
              <p> I am a web desiginer / developer based in Calgary, Candada. I have a strong passion
              for building responsive websites for all devices. </p>
            </div>

            <div className='paraWrapper'>
              <h1>I Can Help.</h1>
              <h2> Available for Freelance Work.</h2>
              <p>
                If you have an idea or project that requires a website dont hesistate to reach out.
                Please check out my work to see the varieties of styles I have played with.
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
                <h1> Design Portfolio </h1>
                <h2> Adobe Illustrator | Photoshop </h2>
              </div>
          </div>


        </div>

        <div className='pageFour'>
          <img className='map' src='/map3.svg' />
        </div>

        <div className='pageFive'>
          <div className='mapWrapper' style={{width: '100%', height: '400px'}}>
            <SimpleMap />
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


let mapOptions = {
zoom: 11,
center: new google.maps.LatLng(39.742043, -104.991531), // Denver
disableDefaultUI: true,
styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]
}
let mapElement = document.getElementById('map');
let map = new google.maps.Map(mapElement, mapOptions);


<Link to={`/dashboard`} className='nodecoration'>



<div className='pageTwo'>
  <div className='portfolioWrapper'>

    <div className='headerWrapper flexx'>
      <h1>Hi.</h1>
      <p> I am a web desiginer / developer based in Calgary, Candada. I have a strong passion
      for building responsive websites for all devices. </p>
    </div>

    <div className='paraWrapper'>
      <h1>I Can Help.</h1>
      <h2> Available for Freelance Work.</h2>
      <p>
        If you have an idea or project that requires a website dont hesistate to reach out.
        Please check out my work to see the varieties of styles I have played with.
      </p>
    </div>

  </div>
</div>

*/
