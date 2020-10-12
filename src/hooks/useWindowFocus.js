import { useState } from 'react';

export default function useWindowFocus() {

  const [windowIsFocused, setWindowIsFocused] = useState(document.hasFocus());

  window.addEventListener('blur', () => setWindowIsFocused(false));

  window.addEventListener('focus', () => setWindowIsFocused(true));

  return windowIsFocused

}