import {
  always,
  cond,
  equals,
} from 'ramda'

const month = cond([
  [equals(1), always('January')],
  [equals(2), always('February')],
  [equals(3), always('March')],
  [equals(4), always('April')],
  [equals(5), always('May')],
  [equals(6), always('June')],
  [equals(7), always('July')],
  [equals(8), always('August')],
  [equals(9), always('September')],
  [equals(10), always('October')],
  [equals(11), always('November')],
  [equals(12), always('December')],
])

export default month
