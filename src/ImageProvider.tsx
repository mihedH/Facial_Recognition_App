import React, { createContext, useContext, useState } from 'react';

export type ImageType = {
  name: string;
  url: string;
};

type ImageContextType = {
  image: ImageType | null;
  setImage: React.Dispatch<React.SetStateAction<ImageType | null>>;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [image, setImage] = useState<ImageType | null>(null);

  // Provide the image state and setter function to children via context
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
