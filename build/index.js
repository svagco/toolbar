const { makeElement, roundedCorner } = require('@svag/lib');
let trafficLights = require('./lib'); if (trafficLights && trafficLights.__esModule) trafficLights = trafficLights.default;

/**
 * Create a toolbar element which with a traffic lights (close, minimise and expand buttons), and possibly a title.
 * @param {ToolbarOptions} options Options to make a toolbar.
 * @param {number} options.width The width of the toolbar.
 * @param {string} [options.title] An optional title to display in the toolbar.
 */
const Toolbar = (options) => {
  if (!options) throw new Error('No options are given.')
  const {
    title,
    width,
    radius: rd = 3,
    height = 22,
    id = 'toolbar',
  } = options
  if (!width) throw new Error('The width must be given.')
  const titleText = title ? makeElement('text', {
    content: title,
    attributes: {
      x: width / 2,
      y: 16,
      'font-family': 'HelveticaNeue, Helvetica Neue',
      'font-size': 13,
      'letter-spacing': 0.4,
      fill: '#464646',
      'text-anchor': 'middle',
    },
  }) : ''
  const rd2 = rd * 2
  const defs = makeElement('defs', {
    content: makeElement('linearGradient', {
      attributes: {
        x1: '50%',
        x2: '50%',
        y2: '100%',
        id,
      },
      content: [
        makeElement('stop', {
          attributes: {
            'stop-color': '#FFFFFF',
            offset: '0%',
          },
        }),
        makeElement('stop', {
          attributes: {
            'stop-color': '#F5F4F5',
            offset: '5%',
          },
        }),
        makeElement('stop', {
          attributes: {
            'stop-color': '#D3D3D3',
            offset: '100%',
          },
        }),
      ],
    }),
  })
  const d = `M${rd2},0 L${width-rd2},0 ${roundedCorner({ x: width-rd2, y: 0 }, { x: width, y: rd2 })} L${width},${height} L0,${height} L0,${height-rd2} L0,${rd2} ${roundedCorner({ x: 0, y: rd2 }, { x: rd2, y: 0 })}`
  const path = makeElement('path', {
    attributes: {
      d,
      fill: `url(#${id})`,
    },
  })
  const tl = trafficLights({ offsetX: 9, offsetY: 6 })
  const res = makeElement('g', {
    attributes: {
      id: 'Toolbar',
    },
    content: [
      defs,
      path,
      titleText,
      tl,
    ],
  })
  return res
}

/* documentary types/index.xml */
/**
 * @typedef {Object} ToolbarOptions Options to make a toolbar.
 * @prop {number} width The width of the toolbar.
 * @prop {string} [title] An optional title to display in the toolbar.
 */

module.exports=Toolbar
//# sourceMappingURL=index.js.map