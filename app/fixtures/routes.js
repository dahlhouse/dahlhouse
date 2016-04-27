export default [
  {route: 'about'},
  {route: 'kitchen'},
  {
    route: 'classroom',
    children: [
      {route: 'about'},
      {route: 'admissions'},
      {route: 'sat'}
    ]
  },
  {route: 'litterbox'},
  {route: 'backyard'}
]
