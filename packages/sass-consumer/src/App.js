import { Typography } from "componentlibrary-css-sass-rollup";
import "./App.scss";

console.log(Typography);

function App() {
  return (
    <div style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}>
      <Typography.Heading1>Title</Typography.Heading1>
      <Typography.BodyText>BodyText content</Typography.BodyText>
    </div>
  );
}

export default App;
