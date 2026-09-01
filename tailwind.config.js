/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  // ✅ Добавьте это:
  darkMode: 'class', // позволяет управлять темой вручную через класс 'dark'

  theme: {
    extend: {
      // Можно позже добавить кастомные цвета, отступы и т.д.
    }
  },

  plugins: []
}
