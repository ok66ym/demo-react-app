export const ColorMessage = (props) => {
  const colorStyle = {
    color: props.color,
    fontSize: "20px",
  }

  return <p style={colorStyle}>{ props.message }</p>
}