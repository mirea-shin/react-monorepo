import { ThemeProvider } from "./Components/ThemeProvider";

import Todos from "./Components/Todo";

function App() {
  return (
    <ThemeProvider>
      <Todos />
    </ThemeProvider>
  );
}

export default App;
