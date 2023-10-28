import { CSSProperties } from "react"

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
} as const satisfies Record<string, Record<string, `#${string}`>>

const fontFamilies = {
  default: 'Roboto, sans-serif',
  headings: 'Encode Sans, sans-serif',
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
  typography: {
    h1: {
      fontFamily: fontFamilies.headings,
      fontSize: "72px",
      fontWeight: 500,
      lineHeight: "88px",
    },
    h2: {
      fontFamily: fontFamilies.headings,
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: "56px",
    },
    h3: {
      fontFamily: fontFamilies.headings,
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "36px",
    },
    h4: {
      fontFamily: fontFamilies.headings,
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "28px",
    },
    h5: {
      fontFamily: fontFamilies.headings,
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    h6: {
      fontFamily: fontFamilies.headings,
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    subtitle1: {
      fontFamily: fontFamilies.default,
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: fontFamilies.default,
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
    },
    body1: {
      fontFamily: fontFamilies.default,
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: 400,
    },
    body2: {
      fontFamily: fontFamilies.default,
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    button: {
      fontFamily: fontFamilies.default,
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 400,
    },
    caption: {
      fontFamily: fontFamilies.default,
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    },
    overline: {
      fontFamily: fontFamilies.default,
      fontSize: "10px",
      lineHeight: "12px",
      fontWeight: 400,
    },
  } satisfies Record<string, CSSProperties>,
  cornerRadius: '12px',
  spacing: (factor: number) => `${8 * factor}px`,
} as const

export type Theme = typeof theme

export default theme
