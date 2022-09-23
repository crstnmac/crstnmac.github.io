export {}

declare global {
  interface Window {
    EventEmitter: any // 👈️ turn off type checking
  }
}
