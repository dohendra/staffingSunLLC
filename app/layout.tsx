'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';

const theme = createTheme({
  palette: {
    primary: { main: '#ff9800' },
    background: { default: '#f5f5f5' },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("Layout rendered!");

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
