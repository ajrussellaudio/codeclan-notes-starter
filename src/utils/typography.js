import Typography from 'typography'
import gray from 'gray-percentage'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

const colors = {
  darkblue: '#2372B5',
  lightblue: '#3DA9DD',
  black: '#3C3C3B',
  white: '#FFFFFF',
}

const typography = new Typography({
  title: 'Russell',
  baseFontSize: '18px',
  baseLineHeight: 1.3,
  scaleRatio: 1.5,
  googleFonts: [
    {
      name: 'Dosis',
      styles: ['800', '600', '400'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700'],
    },
    {
      name: 'Source Code Pro',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Dosis', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  bodyColor: colors.black,
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: colors.darkblue,
    },
    'a:hover': {
      color: colors.lightblue,
    },
    blockquote: {
      display: 'none',
    },
    code: {
      fontFamily: '"Source Code Pro", mono',
    },
    'h1,h2,h3,h4,h5,h6': {
      // textTransform: 'lowercase',
      paddingBottom: rhythm(1 / 4),
      marginBottom: rhythm(1 / 4),
      color: colors.darkblue,
    },
    table: {
      ...scale(-1 / 5),
    },
    // Mobile styles.
    [TABLET_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(1 / 2),
      },
    },
  }),
})

export default typography
