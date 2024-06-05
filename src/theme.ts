import { extendTheme } from '@chakra-ui/react';
import { Styles } from '@chakra-ui/theme-tools';

//color palette
const colors = {
    blueBrand: {
        50: "#E4E7FF",
        100: "#2EB1EE",
        200: "#1E9CD7",
        300: "#5182C3",
        400: "#3C5372",
        500: "#6B43FF",
        600: "#7D6AEE",
        700: "#072B5B",
        800: "#021D42",
        900: "#01132B",
    },
    whiteBrand: {
        50: "#FFFFFF",
        100: "#FDFDFD",
        200: "#EFEFEF",
        300: "#EBEBEB"
    },
    greenBrand: {
        50: "#35FF55",
    },
    beigeBrand: {
        50: "#E7DCDC",
        100: "#C4C4C4",
    },
    brownBrand: {
        500: "#646464",
        100: "#575757",
        200: "#414141",
        300: "#343434",
    },
    orangeBrand: {
        50: "#f88f53",
        100: "#F57025",
        200: "#db560a",

    },
};

// fonts
const fonts = {
    body: "'Roboto', sans-serif",
};

// Global styles
const styles: Styles = {
    global: () => ({
        body: {
            bg: 'blueBrand.700',
            padding: "2rem",       
            WebkitTapHighlightColor: 'transparent',
        },

    }),
};
// Extend the theme with custom colors, fonts, and styles
const theme = extendTheme({
    colors,
    fonts,
    styles,
    components: {
        Text: {
            baseStyle: {
                color: 'whiteBrand.50', // Set the default text color for Text component to whiteBrand.50

            },
        },
    },

});

export default theme;
