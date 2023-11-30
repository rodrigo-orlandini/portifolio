"use client";

import * as React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

// Example from https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts

export function MaterialUIRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={createTheme({})}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}