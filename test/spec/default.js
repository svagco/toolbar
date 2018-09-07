import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import toolbar from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof toolbar, 'function')
  },
  async 'calls package without error'() {
    await toolbar()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await toolbar({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T