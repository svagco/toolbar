const trafficLights = ({ radius: r, offsetX, offsetY }) => {
  const r2 = r + 0.25
  const  y = 5
  return `<g transform="translate(${offsetX}, ${offsetY})">
  <g>
    <circle fill="#FF5F52" cx="5" cy="${y}" r="${r}"/>
    <circle stroke="#E33E32" stroke-width="1" cx="5" cy="${y}" r="${r2}"/>
  </g>
  <g>
    <circle fill="#FFBE05" cx="25" cy="${y}" r="${r}"/>
    <circle stroke="#E2A100" stroke-width="1" cx="25" cy="${y}" r="${r2}"/>
  </g>
  <g>
    <circle fill="#15CC35" cx="45" cy="${y}" r="${r}"/>
    <circle stroke="#17B230" stroke-width="1" cx="45" cy="${y}" r="${r2}"/>
  </g>
</g>`
}

export default trafficLights