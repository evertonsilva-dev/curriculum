import React from 'react';
import { ProfileProvider } from './profile';

export const AppProvider: React.FC = ({ children }) => <ProfileProvider>{children}</ProfileProvider>;
