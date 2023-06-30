import { createTheme } from "@nextui-org/react"
import { fontPoppins } from '@/config/mainFonts';

export const lightTheme = createTheme({
    type: "light",
    theme: {
        colors: {
            // ===== Remove this if you're using Dark mode ====== //
            primary: '$gray900',
            link: '$white'
        },
        fonts: {
            sans: fontPoppins.style.fontFamily
        },
        space: {},
    }
})

export const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {}
    }
})