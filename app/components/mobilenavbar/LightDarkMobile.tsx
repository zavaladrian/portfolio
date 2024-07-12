'use client'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const TOGGLE_CLASSES = 'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10';

const MobileSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Set the component to be client-only by waiting for the mounting phase
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return a placeholder or nothing to avoid rendering on the server
    return null;
  }

  const oppositeTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <div
      className={`grid h-[55px] px-5 place-content-center transition-colors ${
        theme === 'light' ? 'bg-rblue' : 'bg-mblue'
      }`}
    >
      <SliderToggle
        theme={theme}
        setTheme={setTheme}
        oppositeTheme={oppositeTheme}
      />
    </div>
  );
};

const SliderToggle = ({
  theme,
  setTheme,
  oppositeTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  oppositeTheme: string;
}) => {
  const isLight = theme === 'light';

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${isLight ? 'text-black' : 'text-white'}`}
        onClick={() => setTheme(oppositeTheme)}
      >
        {isLight ? <FiMoon className="relative z-10 text-lg md:text-sm" /> : <FiSun className="relative z-10 text-lg md:text-sm" />}
        <span className="relative z-10">
          {isLight ? 'Dark Mode' : 'Light Mode'}
        </span>
      </button>
    </div>
  );
};

export default MobileSwitch;
