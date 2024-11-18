import {MMKV} from 'react-native-mmkv';
import { LOCAL_STORAGE } from '../constant/localStorage';
export const storage = new MMKV({
    id: 'rn-mmkv-storage',
  });

  export const setLocalStorage = (key: LOCAL_STORAGE, value: string) => {
   storage.set(key, value);
  };

  export const getLocalStorage = (key: LOCAL_STORAGE) : string | undefined => {
    return storage.getString(key);
  };

  export const removeLocalStorage = (key: LOCAL_STORAGE) => {
    storage.delete(key);
  };
