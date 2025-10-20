import { ThemeProvider } from "styled-components/native";
import { Groups } from "./src/App/Groups";
import theme from "./src/Theme"

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Groups />
    </ThemeProvider>
  );
}

