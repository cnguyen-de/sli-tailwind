import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(require.resolve('shiki/themes/material-theme-palenight.json')),
      light: await loadTheme(require.resolve('shiki/themes/material-theme-ocean.json')),
    },
  }
})
