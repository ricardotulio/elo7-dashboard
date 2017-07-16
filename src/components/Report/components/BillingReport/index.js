import React, { Component } from 'react'
import { tap } from 'ramda'
import { Line } from '../../../Chart'
import elo7 from '../../../../services/elo7' 
import { groupByMonth } from '../../../../services/calendar'

class BillingReport extends Component {
  constructor(props) {
    super(props)

    this.state = { data: [ { name: 'january', value: 100 } ] }

    elo7.orders()
      .then(groupByMonth('date'))
      .then(orders => this.setState({ data: orders }))
  }

  render() {
    return (
      <Line width={this.props.width} height={this.props.height} data={this.state.data} />
    )
  }
}

export default BillingReport
