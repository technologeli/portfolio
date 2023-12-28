const colors = {
    green: {
        1: "#83d0cb",
        2: "#145277",
    },
    blue: {
        1: "#9bafd9",
        2: "#3d47d9",
    },
    purple: {
        1: "#aa96f9",
        2: "#552586",
    },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: colors.purple,
                secondary: colors.green,
            },
        },
    },
    plugins: [
        require("prettier-plugin-tailwindcss"),
        require('@tailwindcss/typography'),
    ],
};
