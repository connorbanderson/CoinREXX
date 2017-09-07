import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { updateCoins } from '../../../../reducers/crypto'
import { updatePortfolio } from '../../../../reducers/accountinfo'
import './Dashboard.css'


class DashboardPortfolios extends Component {

  constructor( props ){
    super(props)
    this.state = {
    }
  }

  round(value, decimals) {
   return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
   }

  render () {
    let portfolio1 = this.round(
      (
        this.props.crypto['BTC'].price*17.2 +
        this.props.crypto['ETH'].price*99.9 +
        this.props.crypto['BCH'].price*17.2 +
        this.props.crypto['XRP'].price*5750.1 +
        this.props.crypto['XEM'].price*5496.8 +
        this.props.crypto['ETC'].price*59.9 +
        this.props.crypto['ZEC'].price*1.9 +
        this.props.crypto['GNT'].price*1317.9 +
        this.props.crypto['LTC'].price*58.56 +
        this.props.crypto['GNO'].price*1.3 +
        this.props.crypto['SC'].price*25545.73 +
        this.props.crypto['MAID'].price*586.4 +
        this.props.crypto['XLM'].price*9954.8 +
        this.props.crypto['XMR'].price*4.9+
        this.props.crypto['NEO'].price*26.2 +
        this.props.crypto['REP'].price*10 +
        this.props.crypto['DOGE'].price*109953.7 +
        this.props.crypto['SNT'].price*3016.377 +
        this.props.crypto['GAME'].price*90 +
        this.props.crypto['WAVES'].price*61.5 +
        this.props.crypto['BTS'].price*1288.1 +
        this.props.crypto['DASH'].price*1.043 +
        this.props.crypto['FCT'].price*9.7 +
        this.props.crypto['GBYTE'].price*0.4 +
        this.props.crypto['BAT'].price*1435.8 +
        this.props.crypto['STRAT'].price*38.2 +
        this.props.crypto['ICN'].price*56 +
        this.props.crypto['EOS'].price*116 +
        this.props.crypto['STEEM'].price*140.9 +
        this.props.crypto['LSK'].price*86.7 +
        this.props.crypto['NMC'].price*70 +
        this.props.crypto['QTUM'].price*14.9 +
        this.props.crypto['DCR'].price*3.8 +
        this.props.crypto['DGB'].price*4979.1 +
        this.props.crypto['POT'].price*877.4 +
        this.props.crypto['AMP'].price*213.5
      ), 0
    )
    let portfolio2 = this.round(
      (
        this.props.crypto['BTC'].price*0.65244715 +
        this.props.crypto['ETH'].price*10.9 +
        this.props.crypto['BCH'].price*0.65244715 +
        this.props.crypto['SNGLS'].price*535.8 +
        this.props.crypto['BAT'].price*467.0 +
        this.props.crypto['WAVES'].price*19.7 +
        this.props.crypto['BTS'].price*412.4 +
        this.props.crypto['SC'].price*6398.3 +
        this.props.crypto['DGB'].price*3218.1 +
        this.props.crypto['SNT'].price*945.1 +
        this.props.crypto['LSK'].price*27.98081642 +
        this.props.crypto['AMP'].price*233.6 +
        this.props.crypto['REP'].price*3.02660141 +
        this.props.crypto['FCT'].price*2.95104344 +
        this.props.crypto['POT'].price*546.5 +
        this.props.crypto['QTUM'].price*8.93334814 +
        this.props.crypto['XLM'].price*2935.1 +
        this.props.crypto['GNT'].price*216.9 +
        this.props.crypto['NEO'].price*7.60791627 +
        this.props.crypto['GBYTE'].price*0.11548333 +
        this.props.crypto['STEEM'].price*41.63180283 +
        this.props.crypto['GAME'].price*25.84439777 +
        this.props.crypto['STRAT'].price*10.45813369 +
        this.props.crypto['ZEC'].price*0.29516474 +
        this.props.crypto['GNO'].price*0.27296667 +
        this.props.crypto['ETC'].price*3.81198054 +
        this.props.crypto['DOGE'].price*30549.534 +
        this.props.crypto['MAID'].price*160.56087996 +
        this.props.crypto['DCR'].price*2.14797111 +
        this.props.crypto['LTC'].price*1.31731249 +
        this.props.crypto['DASH'].price*0.281705 +
        this.props.crypto['XRP'].price*316.69103918 +
        this.props.crypto['XMR'].price*1.19576613
      ), 0
    )
    let portfolio3 = this.round(
      (
        this.props.crypto['BTC'].price*0.60540599 +
        this.props.crypto['ETH'].price*8.3 +
        this.props.crypto['BCH'].price*0.60540599
      ), 0
    )
      return (
        <div className='noselect flexx' >
          <div className='portfolioDiv'>
            <h1>Main ${portfolio1}</h1>
          </div>
          <h1>Connor ${portfolio2}</h1>
          <h1>Suji ${portfolio3}</h1>
          <h1>Total ${portfolio1 + portfolio2 + portfolio3}</h1>
        </div>
      )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        crypto: state.crypto,
        account: state.accountinfo['ACT-1']
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
      updateCoins,
      updatePortfolio
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DashboardPortfolios)
