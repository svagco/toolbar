import { debuglog } from 'util'

const LOG = debuglog('@svag/toolbar')

/**
 * A macOS toolbar.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function toolbar(config = {}) {
  const {
    type,
  } = config
  LOG('@svag/toolbar called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */