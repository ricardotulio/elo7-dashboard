import {
  assoc,
  curry,
  equals,
  last,
  map,
  prop,
  groupWith,
  reduce,
  replace,
  sum,
  sort,
  sortBy,
} from 'ramda'
import moment from 'moment'
import month from './month'

const getYearAndMonth = replace(/-[0-9]{2}$/, '')

const sameYearAndMonth = (a, b) => 
  equals(getYearAndMonth(a), getYearAndMonth(b))

const groupByMonth = curry((propName, list) => {
  return sortBy(prop('month'), map(obj => {
      const lastItem = last(obj)
      const date = moment(prop(propName, lastItem), 'YYYY-MM-DD')

      return {
        month: getYearAndMonth(prop('date', obj[0])),
        label: month(date.month()) + ' ' + date.year(),
        value: sum(map(prop('value'), obj))
      }
    },
    groupWith((a, b) => {
      return sameYearAndMonth(
        prop(propName, a),
        prop(propName, b),
      )
    }, list)
  ))
})

export default groupByMonth
