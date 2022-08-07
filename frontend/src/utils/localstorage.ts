interface LocalStorageProps {
  set: <T>(key: string, value: T) => void;
  get: (key: string) => string | void;
  reset: () => void;
}

export const handleLocalStorage: LocalStorageProps = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: key => {
    const item = localStorage.getItem(key);
    try {
      return item && JSON.parse(item);
    } catch (error) {
      return null;
    }
  },
  reset: () => {
    localStorage.clear();
  },
};
