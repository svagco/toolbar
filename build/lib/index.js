const { makeElement } = require('@svag/lib');

const makeCircle = (cx, cy, color, radius) => {
  const c = makeElement('circle', {
    attributes: {
      stroke: color,
      'stroke-width': 1,
      cx,
      cy,
      r: radius,
    },
  })
  return c
}

const makeLight = (cx, cy, color, strokeColor, r) => {
  const r2 = r + 0.25
  const light = makeElement('g', {
    content: [
      makeCircle(cx, cy, strokeColor, r2),
      makeElement('circle', {
        attributes: {
          fill: color,
          cx,
          cy,
          r,
        },
      }),
    ],
  })
  return light
}

const trafficLights = ({ radius: r = 5.25, offsetX, offsetY }) => {
  const cy = 5

  const g = makeElement('g', {
    attributes: {
      transform: `translate(${offsetX}, ${offsetY})`,
    },
    content: [
      makeLight(5, cy, '#FF5F52', '#E33E32', r),
      makeLight(25, cy, '#FFBE05', '#E2A100', r),
      makeLight(45, cy, '#15CC35', '#17B230', r),
    ],
  })
  return g
}

module.exports=trafficLights
//# sourceMappingURL=index.js.map