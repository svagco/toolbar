const { makeElement } = require('@svag/lib');

const makeCircle = (cy, color, radius, cx) => {
  const c = makeElement({
    name: 'circle',
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

const trafficLights = ({ radius: r, offsetX, offsetY }) => {
  const r2 = r + 0.25
  const cy = 5
  const red = makeCircle(cy, '#E33E32', r2, 5)
  const yellow = makeCircle(cy, '#E2A100', r2, 25)
  const green = makeCircle(cy, '#17B230', r2, 45)

  return `<g transform="translate(${offsetX}, ${offsetY})">
  <g>
    ${red}
    <circle fill="#FF5F52" cx="5" cy="${cy}" r="${r}"/>
  </g>
  <g>
    ${yellow}
    <circle fill="#FFBE05" cx="25" cy="${cy}" r="${r}"/>
  </g>
  <g>
    ${green}
    <circle fill="#15CC35" cx="45" cy="${cy}" r="${r}"/>
  </g>
</g>`
}

module.exports=trafficLights
//# sourceMappingURL=index.js.map