declare global {
  interface Window {
    _globalStorage?: {
      [key: string]: string
    }
  }
}

export { }