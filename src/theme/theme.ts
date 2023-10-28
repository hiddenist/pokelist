const palette = {
  primary: {
    $10: '#acd2e5',
    $20: '#3887af',
    main: '#024e74',
    $40: '#003a57',
    $50: '#002a3f',
  },
  secondary: {
    main: '#ebf8fe',
    $10: '#f4fcff',
    $40: '#d5ebf5',
  },
  accent: {
    $10: '#aff9fa',
    $20: '#3dd5d6',
    main: '#15bebf',
    $40: '#009090',
    $50: '#006468',
  },
  neutral: {
    light: '#fdfdfd',
    dark: '#23292b',
    white: '#ffffff',
    $20: '#f6f6f7',
    $30: '#e3e1e5',
    $40: '#666d71',
    $50: '#384145',
  },
  warning: {
    $10: '#ffe8ae',
    $50: '#d09600',
    main: '#ffbc10',
    $20: '#ffce4f',
    $40: '#f2ae00',
  },
  error: {
    $10: '#ffe7e7',
    $20: '#ffbfbe',
    main: '#d40300',
    $40: '#ab0200',
    $50: '#670100',
  },
  successNegative: {
    $10: '#bfddb0',
    $20: '#63a443',
    main: '#2c8300',
    $40: '#216400',
    $50: '#113200',
  },
} as const

const theme = {
  palette,
  color: {
    background: {
      page: palette.neutral.$20,
      section: palette.neutral.light,
    },
    text: {
      primary: palette.neutral.dark,
      secondary: palette.neutral.$40,
    },
    stroke: palette.neutral.$30,
  },
  cornerRadius: '12px',
  spacing: (factor: number) => `${8 * factor}px`,
}

export type Theme = typeof theme

export default theme
