import byWeek from './byWeek'

const data = [
  {
    date: '2017-07-26',
  },
  {
    date: '2017-07-26',
  },
  {
    date: '2017-07-24',
  },
  {
    date: '2017-07-22',
  },
  {
    date: '2017-07-22',
  },
  {
    date: '2017-07-21',
  },
  {
    date: '2017-07-19',
  },
  {
    date: '2017-07-19',
  },
  {
    date: '2017-07-19',
  },
  {
    date: '2017-07-17',
  },
]

const expected = [
  [
    {
      date: '2017-07-26',
    },
    {
      date: '2017-07-26',
    },
    {
      date: '2017-07-24',
    },
  ],
  [
    {
      date: '2017-07-22',
    },
    {
      date: '2017-07-22',
    },
    {
      date: '2017-07-21',
    },
    {
      date: '2017-07-19',
    },
    {
      date: '2017-07-19',
    },
    {
      date: '2017-07-19',
    },
    {
      date: '2017-07-17',
    },
  ],
]

test('must group by week', () => {
  expect(byWeek(data)).toMatchObject(expected)
})
