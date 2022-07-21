export namespace LocalStorage {
  export function get<T>(key: string) {
    if (!localStorage.getItem(key)) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key)) as T;
  }
  export function set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  export function remove(key: string): void {
    localStorage.removeItem(key);
  }
}
