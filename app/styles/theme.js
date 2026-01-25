export const lightTheme = {
  colors: {
    primary: '#0EA5E9',
    primaryHover: '#0284C7',
    secondary: '#6366F1',
    // Soft gradient background for light mode
    background: '#F0F9FF',           // Very soft sky blue
    backgroundAlt: '#E0F2FE',        // Slightly darker soft blue
    backgroundGradient: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #F5F3FF 100%)',
    surface: '#FFFFFF',
    surfaceHover: '#F8FAFC',
    text: '#0F172A',                 // Darker for better contrast
    textSecondary: '#475569',
    textMuted: '#64748B',
    border: '#CBD5E1',
    success: '#10B981',
    whatsapp: '#25D366',
    whatsappHover: '#128C7E',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
    shadow: 'rgba(14, 165, 233, 0.1)',
    shadowHover: 'rgba(14, 165, 233, 0.2)',
  },
  isDark: false,
};

export const darkTheme = {
  colors: {
    primary: '#38BDF8',
    primaryHover: '#7DD3FC',
    secondary: '#A5B4FC',
    background: '#0F172A',
    backgroundAlt: '#1E293B',
    backgroundGradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
    surface: '#1E293B',
    surfaceHover: '#334155',
    text: '#F8FAFC',                 // Brighter for better contrast
    textSecondary: '#CBD5E1',
    textMuted: '#94A3B8',
    border: '#475569',
    success: '#34D399',
    whatsapp: '#25D366',
    whatsappHover: '#128C7E',
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #A5B4FC 100%)',
    shadow: 'rgba(0, 0, 0, 0.4)',
    shadowHover: 'rgba(0, 0, 0, 0.5)',
  },
  isDark: true,
};

export const theme = {
  fonts: {
    primary: "'Outfit', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
};
