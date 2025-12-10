import TodoPage from "./Pages/TodoPage";
import { ThemeProvider } from "./Components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <TodoPage />
    </ThemeProvider>
  );
}

export default App;
