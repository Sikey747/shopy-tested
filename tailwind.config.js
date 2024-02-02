/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.liquid", "./src/**/*.js"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            colors: {
                transparent: "transparent",
                black: "#000",
                white: "#fff",
                // gray: {
                //     100: "#f7fafc",
                //     900: "#1a202c",
                // },
                blue: "#1fb6ff",
                purple: "#7e5bef",
                pink: "#ff49db",
                orange: "#ff7849",
                green: "#13ce66",
                yellow: "#ffc82c",
                "gray-dark": "#273444",
                gray: "#8492a6",
                "gray-light": "#d3dce6",
            },
        },
    },
    plugins: [],
};
