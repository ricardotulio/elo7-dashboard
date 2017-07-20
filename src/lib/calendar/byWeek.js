import {
  curry,
  equals,
  groupWith,
  prop,
} from 'ramda'
import moment from 'moment'

const date = obj => moment(prop('date', obj), 'YYYY-MM-DD')

const week = obj => date(obj).week()

const sameWeek = curry((a, b) => equals(week(a), week(b)))

const byWeek = groupWith(sameWeek)

export default byWeek
