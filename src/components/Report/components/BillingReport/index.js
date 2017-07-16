import React from 'react'
import { Line } from '../../../Chart'
import elo7 from '../../../../services/elo7' 
import { groupByMonth } from '../../../../services/calendar'

const data = await elo7.orders()
  .then(groupByMonth('date'))

const BillingReport = props => (
  <Line width={props.width} height={props.height} data={data} />
)

export default BillingReport
