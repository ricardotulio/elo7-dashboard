import React, { Component } from 'react'
import { 
  or,
  filter,
  propEq,
} from 'ramda'
import { Line } from '../../../Chart'
import elo7 from '../../../../services/elo7' 
import { groupByMonth } from '../../../../services/calendar'

class BillingReport extends Component {
  constructor(props) {
    super(props)

    this.state = { data: [ { name: 'january', value: 100 } ] }

    const finished = propEq('status', 'finished')
    const shipping = propEq('status', 'finished')
    const paid = or(shipping, finished)

    elo7.orders()
      .then(filter(paid))
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
