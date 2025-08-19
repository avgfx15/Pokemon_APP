import React, { useEffect, useState } from 'react';

// @ Declare Theme Array
const themes = [
  '',
  'theme_dark',
  'theme_green',
  'theme_purple',
  'theme_light',
  'theme_Pink',
]; // "" = default

const ThemeSwitcherComponent = () => {
  // * Get Theme From localstorage
  //   const getTheme = () => {
  //     const storedTheme = localStorage.getItem('theme');
  //     if (storedTheme) {
  //       setTheme(storedTheme);
  //     }
  //   };

  //@ Theme Variable
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

  // # Set New Theme and Store in localstorage
  const setNewTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
    setNewTheme(theme);
  }, [theme]);

  return (
    <div className='p-4 flex gap-2 flex-wrap justify-center items-center'>
      {themes.map((t, i) => (
        <button
          key={t || 'default'}
          onClick={() => setTheme(t)}
          className='px-3 py-2 rounded-lg border border-primary bg-secondary text-black font-heading'
        >
          Theme {i + 1}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcherComponent;
