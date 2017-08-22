import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'

import './Dashboard.scss'

const Dashboard = (props) => {
  let i = props.account.meta.theme
  let dashboardMainContainer = classNames({
    'dashboard-main-container': true,
     [`theme${i}`]: true
  })
  console.log('dashboard theme is', i);
  return(
    <div>
        <div className='dashboard-content'>
        </div>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
    return {
        account: state.accountinfo['ACT-1']
    };
}

export default connect(mapStateToProps)(Dashboard)

/*

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import pages from '../routes'
import classNames from 'classnames'

import './Dashboard.scss'

const Dashboard = (props) => {
  let i = props.account.meta.theme
  let dashboardMainContainer = classNames({
    'dashboard-main-container': true,
     [`theme${i}`]: true
  })
  console.log('dashboard theme is', i);
  return(
    <div>
        <div className='dashboard-content'>
          { routes() }
        </div>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
    return {
        account: state.accountinfo['ACT-1']
    };
}

export default connect(mapStateToProps)(Dashboard)

*/
