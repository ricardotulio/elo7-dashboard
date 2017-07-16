import React from 'react'
import { 
  CartesianGrid,
  Legend,
  Line,
  LineChart, 
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default (props) => (
  <LineChart width={props.width} height={props.height} data={props.data}>
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Legend verticalAlign="top" height={36} />
    <Tooltip />
  </LineChart>
)
