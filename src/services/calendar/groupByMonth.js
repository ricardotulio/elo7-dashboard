import {
  assoc,
  curry,
  equals,
  last,
  map,
  prop,
  groupWith,
  replace,
  split,
} from 'ramda'
import moment from 'moment'

const getYearAndMonth = replace(/-[0-9]{2}$/, '')

const sameYearAndMonth = (a, b) => 
  equals(getYearAndMonth(a), getYearAndMonth(b))

const groupByMonth = curry((propName, list) => {
  return map(obj => {
      const lastItem = last(obj)
      const date = moment(prop(propName, lastItem), 'YYYY-MM-DD')
      
      return assoc(date.month(), obj, {})
    },
    groupWith((a, b) => {
      return sameYearAndMonth(
        prop(propName, a),
        prop(propName, b),
      )
    }, list)
  )
})

export default groupByMonth
