// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './assets/*.js', // إذا كان لديك ملفات JavaScript تولد HTML
  ],
  theme: {
    extend: {
      colors: {
        // يجب أن تتطابق هذه الأسماء مع معرفات أنظمة الألوان في Shopify
        'primary': 'var(--color-primary-background)',
        'primary-text': 'var(--color-primary-foreground)',
        'primary-border': 'var(--color-primary-border)',
        'accent-1': 'var(--color-accent-1-background)',
        'accent-1-text': 'var(--color-accent-1-foreground)',
        'accent-1-border': 'var(--color-accent-1-border)',
        // أضف جميع أنظمة الألوان الأخرى الخاصة بك هنا
      },
    },
  },
  plugins: [],
}