import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { authActions } from 'src/auth';
import Scroll from 'react-scroll';
import classNames from 'classnames'
import { Input } from 'semantic-ui-react'
import $ from 'jquery';
import './sign-in-page.css';





class SignInPage extends Component {

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
      <div className='loginBody noselect flexx' >
        <h1 className={loginHeaderTop}> CoinREX </h1>
        <h1 className={loginHeaderBottom}> CoinREX</h1>
        <i className={mainHeaderStatTop} aria-hidden="true"
        onClick={()=>(this.scrollBottom())}
        />
        <i className={mainHeaderStatBottom} aria-hidden="true"
        onClick={()=>(this.scrollTop())}
        />
        <div className='background backgroundOne flexx' />
        <div className='background backgroundTwo flexx' />
        <div className={loginForm}>
          <Input placeholder='Username' className='inputCustom pwdiv'>
          </Input>
          <Input placeholder='Password' type="password" className='inputCustom emaildiv' />
          <Link to={`/user`} className='nodecoration loginButton flexx'>
            Login
          </Link>
        </div>
        <div className={loginNav}>
          <div className='navleft'> CoinREX </div>
        </div>
      </div>
    )
  }
}





SignInPage.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithGithub: authActions.signInWithGithub,
  signInWithGoogle: authActions.signInWithGoogle,
  signInWithTwitter: authActions.signInWithTwitter
};

export default withRouter(connect(null,mapDispatchToProps)(SignInPage));


/*
<Button className="sign-in__button" onClick={signInWithGithub}>GitHub</Button>
<Button className="sign-in__button" onClick={signInWithGoogle}>Google</Button>
<Button className="sign-in__button" onClick={signInWithTwitter}>Twitter</Button>
*/
