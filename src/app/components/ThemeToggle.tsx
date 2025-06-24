'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) {
      setTheme(saved);
      updateTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      updateTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  function updateTheme(t: 'light' | 'dark') {
    if (t === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    updateTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  if (!mounted) return null;

  return (
    <button
  aria-label="Toggle dark mode"
  onClick={toggleTheme}
  className="w-10 h-10 rounded-full bg-transparent border-2 border-gray-300 hover:bg-gray-200 dark:border-transparent dark:hover:bg-gray-600"
>
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="text-gray-800" />
      )}
    </button>
  );
}
