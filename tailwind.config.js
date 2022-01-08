module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                black: {
                    300: '#5C5C5C',
                    500: '#3C3C3C',
                    900: '#1E1E1E'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
