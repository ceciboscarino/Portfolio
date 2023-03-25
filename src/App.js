import "./App.css";
import { NavBar, CenteredText, TextWithImage } from "./components";
import { primaryColorPalette, secondaryColorPalette } from "./color-palette";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: primaryColorPalette,

    secondary: {
      main: secondaryColorPalette[500],
      light: secondaryColorPalette[100],
      dark: secondaryColorPalette[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <CenteredText />
        <TextWithImage />
      </div>
    </ThemeProvider>
  );
}

export default App;
