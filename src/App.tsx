import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import AppRouter from "./routers/AppRouter";
import { useContext, useEffect } from "react";
import './css/style.css';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    </LanguageProvider>
  );
}

const Consumer = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
