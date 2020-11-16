import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import defaultData from 'src/data/defaultData';
import { Profile } from 'src/interfaces';
import { getProfile } from 'src/services';

export interface IProfileContext {
  me: () => void;
  user: Profile;
}

export const ProfileContext = createContext<IProfileContext>({} as IProfileContext);

export const ProfileProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Profile>(defaultData);

  const me = useCallback(async () => {
    getProfile()
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const providerValue = useMemo(() => ({ me, user }), [me, user]);

  useEffect(() => {
    me();
    const interval = window.setInterval(() => me(), 6e5);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProfileContext.Provider value={providerValue}>{children}</ProfileContext.Provider>;
};
