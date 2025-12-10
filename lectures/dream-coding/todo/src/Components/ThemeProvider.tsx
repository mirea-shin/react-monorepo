import { useState, useEffect } from "react";

import ThemeContext, { type Theme } from "../contexts/ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const prefersDarkQuery = "(prefers-color-scheme: dark)";

  const [theme, setTheme] = useState<Theme>(() => {
    // 브라우저 환경이 아닐 경우 (SSR 등) 기본값 'light' 반환
    if (typeof window === "undefined" || !window.matchMedia) {
      return "light";
    }
    // 미디어 쿼리를 사용하여 초기 설정 확인
    return window.matchMedia(prefersDarkQuery).matches ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.className = `dark-theme`;
    } else {
      document.body.className = "";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
