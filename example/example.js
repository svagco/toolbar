import { svg } from '@svag/lib'
import { writeFileSync } from 'fs'
/* start example */
import toolbar from '../src'

const res = toolbar({
  title: '👾Terminal',
  width: 400,
})

console.log(res)
/* end example */
const image = svg({
  content: res,
  height: 50,
  width: 400,
  stretch: false,
})
writeFileSync('images/toolbar.svg', image)