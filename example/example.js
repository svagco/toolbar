import { writeFileSync } from 'fs'
/* start example */
import toolbar from '../src'

const res = toolbar({
  title: '👾Terminal',
  width: 800,
})

console.log(res)
/* end example */
writeFileSync('images/toolbar.svg', res)