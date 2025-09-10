import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  role: 'Pet Owner' | 'Veterinarian' | 'Shelter' | null;
}

interface Pet {
  name: string;
  species: string;
  breed: string;
  age: string;
}

interface AppContextType {
  user: User;
  setUser: (user: User) => void;
  pet: Pet | null;
  setPet: (pet: Pet) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  mood: string;
  setMood: (mood: string) => void;
  ambience: string;
  setAmbience: (ambience: string) => void;
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  visitorCount: number;
  incrementVisitor: () => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  retakeQuiz: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User>({ name: '', role: null });
  const [pet, setPetState] = useState<Pet | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [mood, setMood] = useState('Happy');
  const [ambience, setAmbience] = useState('None');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [visitorCount, setVisitorCount] = useState(0);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Load data from localStorage
    const savedUser = localStorage.getItem('furEver_userName');
    const savedRole = localStorage.getItem('furEver_userRole') as User['role'];
    const savedPet = localStorage.getItem('furEver_pet');
    const savedFavorites = localStorage.getItem('furEver_favorites');
    const savedVisitorCount = localStorage.getItem('furEver_visitorCount');
    const savedDarkMode = localStorage.getItem('furEver_darkMode');
    const savedFontSize = localStorage.getItem('furEver_fontSize');

    if (savedUser && savedRole) {
      setUserState({ name: savedUser, role: savedRole });
    }

    if (savedPet) {
      setPetState(JSON.parse(savedPet));
    }

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    if (savedVisitorCount) {
      setVisitorCount(parseInt(savedVisitorCount));
    } else {
      setVisitorCount(1);
      localStorage.setItem('furEver_visitorCount', '1');
    }

    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }

    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize));
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const setUser = (newUser: User) => {
    setUserState(newUser);
    if (newUser.name) {
      localStorage.setItem('furEver_userName', newUser.name);
    }
    if (newUser.role) {
      localStorage.setItem('furEver_userRole', newUser.role);
    }
  };

  const setPet = (newPet: Pet) => {
    setPetState(newPet);
    localStorage.setItem('furEver_pet', JSON.stringify(newPet));
  };

  const toggleFavorite = (productId: string) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
    setFavorites(newFavorites);
    localStorage.setItem('furEver_favorites', JSON.stringify(newFavorites));
  };

  const incrementVisitor = () => {
    const newCount = visitorCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem('furEver_visitorCount', newCount.toString());
  };

  const retakeQuiz = () => {
    localStorage.removeItem('furEver_userName');
    localStorage.removeItem('furEver_userRole');
    localStorage.removeItem('furEver_pet');
    setUserState({ name: '', role: null });
    setPetState(null);
  };

  const contextValue: AppContextType = {
    user,
    setUser,
    pet,
    setPet,
    darkMode,
    setDarkMode: (dark: boolean) => {
      setDarkMode(dark);
      localStorage.setItem('furEver_darkMode', JSON.stringify(dark));
    },
    mood,
    setMood,
    ambience,
    setAmbience,
    favorites,
    toggleFavorite,
    visitorCount,
    incrementVisitor,
    fontSize,
    setFontSize: (size: number) => {
      setFontSize(size);
      localStorage.setItem('furEver_fontSize', size.toString());
    },
    retakeQuiz,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};