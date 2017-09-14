import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { authActions } from 'src/auth';
import Scroll from 'react-scroll';
import classNames from 'classnames'
import { Input } from 'semantic-ui-react'
import { Button } from 'antd'
import $ from 'jquery';
import './landing.css';
import 'public/cbalogoentrance.svg'





class Connor extends Component {

  constructor( props ){
    super(props)
    this.state = {
      isHidden: true
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


  render () {
    let loginHeaderTop = classNames({
      'topHeader': true,
      'hidden': !this.state.isHidden,
      'felxx': true
    })
    let mainHeaderStatTop = classNames({
      'fa': true,
      'fa-angle-double-down': true,
      'fa-5x': true,
      'mainHeaderStatTop': true,
      'hidden': !this.state.isHidden
    })
    let loginHeaderBottom = classNames({
      'bottomHeader': true,
      'hidden': this.state.isHidden,
      'felxx': true,

    })
    let mainHeaderStatBottom = classNames({
      'fa': true,
      'fa-angle-double-up': true,
      'fa-5x': true,
      'mainHeaderStatBottom': true,
      'hidden': this.state.isHidden
    })
    let loginNav = classNames({
      'loginNav': true,
      'hidden': this.state.isHidden,
      'flexx': true
    })
    let loginForm = classNames({
      'loginDiv': true,
      'hidden': this.state.isHidden,
      'flexx': true
    })


    var loginButton = $('loginButton');
    loginButton.css({ 'opacity': 0 });

    return (
      <div className='landingBody flexx' >
        <img className='landingSVG' src='/cbalogoentranceV3.svg'></img>

      <div className='professionalDiv flexx'>
        <img className='professionalSVG' src='/personalIsland2.svg'></img>
      </div>

      <div className='personalDiv flexx'>
        <img className='personalSVG' src='/professionalIsland3.svg'></img>
      </div>

      <img className='cloudSVG1' src='/cloud1.svg'></img>
      <img className='cloudSVG2' src='/cloud2.svg'></img>
      <img className='cloudSVG3' src='/cloud3.svg'></img>
      <img className='cloudSVG4' src='/cloud4.svg'></img>

      </div>
    )
  }
}

export default Connor


/*

<div className='loginBody noselect flexx' >
  <h1 className={loginHeaderTop}> Connor Anderson </h1>
  <h1 className={loginHeaderBottom}> Connor Anderson </h1>
  <i className={mainHeaderStatTop} aria-hidden="true"
  onClick={()=>(this.scrollBottom())}
  />
  <i className={mainHeaderStatBottom} aria-hidden="true"
  onClick={()=>(this.scrollTop())}
  />
  <div className='background backgroundOne flexx' />
  <div className='background backgroundTwo flexx' />
  <div className={loginForm}>
  <Button className="sign-in__button" onClick={this.props.signInWithGoogle}> Google </Button>
    <Link to={`/user`} className='nodecoration loginButton flexx'>
      Login
    </Link>
  </div>
  <div className={loginNav}>
    <div className='navleft'> Connor Anderson </div>
  </div>
</div>


*/
