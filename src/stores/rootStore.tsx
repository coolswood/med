import { useLocalObservable } from 'mobx-react';
import React from 'react';

type storeTypes = {};

export function createStore() {
  return {};
}

export const Mobx = React.createContext<storeTypes | null>(null);

export const StoreProvider = ({ children }: any) => {
  const store = useLocalObservable(createStore);
  return <Mobx.Provider value={store}>{children}</Mobx.Provider>;
};

export const useStore = () => {
  const store = React.useContext(Mobx);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
