// global.d.ts

declare global {
    interface Window {
      onMessageFromRN: (message: string) => void;
    }
  }
  
  // This line is necessary to ensure the file is treated as a module.
  export {};
  