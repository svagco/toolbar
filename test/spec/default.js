import { equal, throws } from 'zoroaster/assert'
import Context from '../context'
import toolbar from '../../src'
import SnapshotContext from 'snapshot-context'

/** @type {Object.<string, (c: Context, s: SnapshotContext)>} */
const T = {
  context: [Context, SnapshotContext],
  'is a function'() {
    equal(typeof toolbar, 'function')
  },
  async 'throws an error when no options are given'() {
    await throws({
      fn: toolbar,
      message: 'No options are given.',
    })
  },
  async 'throws an error when no width is given'() {
    await throws({
      fn: toolbar,
      args: [{}],
      message: 'The width must be given.',
    })
  },
  async 'creates a toolbar with a title'(
    { SNAPSHOT_DIR }, { setDir, test },
  ) {
    setDir(SNAPSHOT_DIR)
    const t = toolbar({ width: 400, title: 'hello world' })
    await test('title.svg', t)
  },
  async 'creates a toolbar without a title'(
    { SNAPSHOT_DIR }, { setDir, test },
  ) {
    setDir(SNAPSHOT_DIR)
    const t = toolbar({ width: 400 })
    await test('no-title.svg', t)
  },
}

export default T