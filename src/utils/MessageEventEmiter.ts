import EventEmitter from 'events';
import { useEffect } from 'react';

const RNEvents = new EventEmitter();

// Ensure the cleanup function has the correct return type
export const registerRNHandler = (
  action: string,
  callback: (payload: any) => void,
): () => void => { // Specify that the return type is a cleanup function
  RNEvents.on(action, callback);
  return () => RNEvents.off(action, callback);
}

export const useRNHandler = (
  action: string,
  callback: (payload: any) => void,
) => {
  useEffect(() => {
    const deregister = registerRNHandler(action, callback);
    return () => deregister(); // This should now be correctly typed
  }, [action, callback]);
}

const onMessageFromRN = (message: string) => {
  const { action, payload } = JSON.parse(message);
  RNEvents.emit(action, payload);
}

// Attach the handler to `window` for React Native WebView access
window.onMessageFromRN = onMessageFromRN;
