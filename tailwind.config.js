module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                diagonal: "url('bg-diagonal.jpg')",
                "portfolio-hero": `url('https://via.placeholder.com/1920x1080')`,
                // "gradient-brand":
                //     "linear-gradient(to left top,#ff2c9c,#ff287b,#ff395a,#ff5137,#ff6a00)",
                "gradient-brand": "linear-gradient(to left bottom, #4776E6, #8E54E9)",
            }),
            backgroundSize: {
                200: "200%",
            },
            screens: {
                xs: "444px",
                dt: "576px",
                nv: "990px",
                pr: "1185px",
                "cs-lg": "1247px",
            },
            spacing: {
                100: "25rem",
                156: "39rem",
                200: "50rem",
                "289px": "289px",
                "398px": "398px",
                "1150px": "1150px",
                "850px": "850px",
            },
            fontSize: {
                base: "0.9375rem",
                "4xl": "2.5rem",
            },
            fontWeight: {
                normal: 400,
            },
            fontFamily: {
                sans: [
                    "Open Sans",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "Roboto",
                    '"Helvetica Neue"',
                    "Arial",
                    '"Noto Sans"',
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
                serif: [
                    "Saira",
                    "ui-serif",
                    "Georgia",
                    "Cambria",
                    '"Times New Roman"',
                    "Times",
                    "serif",
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
