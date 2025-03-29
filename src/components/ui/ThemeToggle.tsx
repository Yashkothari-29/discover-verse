
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun className={`h-4 w-4 absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      <Moon className={`h-4 w-4 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
    </Button>
  );
};

export default ThemeToggle;
