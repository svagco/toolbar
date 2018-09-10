import { svg } from '@svag/lib'
import { writeFileSync } from 'fs'
/* start example */
import Toolbar from '../src'

const res = Toolbar({
  width: 400,
})
/* end example */

console.log(res)
const image = svg({
  content: res,
  height: 50,
  width: 400,
  stretch: false,
})
writeFileSync('images/no-title.svg', image)