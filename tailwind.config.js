/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                cosmic: {
                    dark: '#0a0e27',
                    purple: '#6366f1',
                    pink: '#ec4899',
                    blue: '#3b82f6',
                    cyan: '#06b6d4',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-slower': 'float 10s ease-in-out infinite',
                'orbit': 'orbit 20s linear infinite',
                'orbit-reverse': 'orbit-reverse 25s linear infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'twinkle': 'twinkle 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                orbit: {
                    '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
                },
                'orbit-reverse': {
                    '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
                    '100%': { transform: 'rotate(-360deg) translateX(120px) rotate(360deg)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '1' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
