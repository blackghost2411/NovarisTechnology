import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { night:'#070B14', ink:'#0B1020', electric:'#3B82F6', violet:'#7C3AED' }, boxShadow: { glow:'0 0 60px rgba(59,130,246,.25)' } } }, plugins: [] }
export default config
