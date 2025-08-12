'use client';

import { useTheme } from './ThemeProvider';
import Navigation from './Navigation';

export default function NavigationWrapper() {
  const { mounted } = useTheme();

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="text-xl font-bold gradient-text">AJ</div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-100 dark:bg-dark-700 rounded-lg animate-pulse"></div>
              <div className="w-10 h-10 bg-gray-100 dark:bg-dark-700 rounded-lg animate-pulse md:hidden"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return <Navigation />;
}
