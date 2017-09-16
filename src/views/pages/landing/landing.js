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
    console.log('het there state is', this.state);
    this.state = {
      isHidden: true,
      transition: false
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

    let personalDiv = classNames({
      'personalDiv':  true,
      'personalDivTransition': this.state.transition,
      'flexx': true
    })
    let professionalDiv = classNames({
      'professionalDiv': true,
      'professionalDivTransition': this.state.transition,
      'flexx': true
    })
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
      'landingBodyBefore': !this.state.transition,
      'landingBodyAfter': this.state.transition,
      'landingBody': true,
      'noselect': true,
      'flexx': true
    })

    var loginButton = $('loginButton');
    loginButton.css({ 'opacity': 0 });

    return (
      <div className={landingBody} >


        <img className={landingSVG} src='/landingMeteor.svg'></img>
        <div className={personalDiv} onClick={()=>{this.setState({ transition: true })}}>
          <img className='personalSVG' src='/personalIsland2.svg'></img>
        </div>
        <div className={professionalDiv} onClick={()=>{this.setState({ transition: true })}}>
          <img className='professionalSVG' src='/professionalIsland4.svg'></img>
        </div>
        <div className={cloudWrapper}>
          <img className='cloud cloudSVG1' src='/cloud1.svg'></img>
          <img className='cloud cloudSVG2' src='/cloud2.svg'></img>
          <img className='cloud cloudSVG3' src='/cloud3.svg'></img>
          <img className='cloud cloudSVG4' src='/cloud4.svg'></img>
        </div>



        <div className={professionalPage}>
          <div className='section section1 flexx'>
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
          <div className='section section2 flexx'>
            <div className='portfolio1 portfolio flexx'>
              <div className='header'>
                <h1> CoinREX </h1>
                <h2> REACT | REDUX | SCSS </h2>
                <h2> JS | ANT D | FIREBASE </h2>
              </div>
            </div>
            <div className='portfolio2 portfolio flexx'>
              <div className='header'>
                <h1> Flat Design </h1>
                <h2> Adobe Illustrator </h2>
              </div>
            </div>
            <div className='portfolio3 portfolio flexx'>
              <div className='header'>
                <h1> Photo Editing </h1>
                <h2> Adobe Illustrator </h2>
              </div>
            </div>
            <div className='portfolio4 portfolio flexx'>
              <div className='header'>
                <h1> Logo Design </h1>
                <h2> Adobe Illustrator </h2>
              </div>
            </div>
          </div>
          <div className='section section3 flexx'>
            <h1> Section 3</h1>
          </div>
        </div>




      </div>
    )
  }
}

export default Connor


/*

<div className={professionalPage}>
  <div className='entrance'>
    <div className='headerWrapper'>
      <div className='nameWrapper'>
        <h1 className='noselect'>Connor Anderson</h1>
      </div>
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
  <div className='entrance'>
    <div className='headerWrapper'>
      <div className='nameWrapper'>
        <h1 className='noselect'>Connor Anderson</h1>
      </div>
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



<div className='navBarVersion1'>
  <div className='topright'>
    CA
  </div>
</div>




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
