module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
          colors: {
                primary: '#7c2c47',
                secondary: '#521D2F',
                alternative: '#521D2F',
                pink: '#B84169',
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
