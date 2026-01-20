/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'asana-green': '#1e6b52',
                'asana-green-dark': '#165744',
                'asana-coral': '#f06a6a',
                'asana-purple': '#7c3aed',
                'asana-blue': '#4573d2',
                'bg-cream': '#fffaf8',
                'bg-navy': '#1b2938',
                'text-dark': '#1e1e1e',
                'text-gray': '#6f6f6f',
                'text-muted': '#9a9a9a',
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
