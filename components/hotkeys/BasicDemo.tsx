import {useState} from 'react'
import {useHotkeys} from 'react-hotkeys-hook'

/**
 * Uses this hook https://github.com/JohannesKlauss/react-hotkeys-hook
 */

export default function BasicDemo(){
  const [count, setCount] = useState(0);
  useHotkeys('ctrl+shift+k', () => setCount(prevCount => prevCount + 1));
  useHotkeys('ctrl+alt+k', () => setCount(prevCount => prevCount - 1));
  return (
    <section>
      <h3>Use hotkey ctrl+shift+k to increase the count</h3>
      <h3>Use hotkey ctrl+alt+k to decrease the count</h3>
      <p>
        Pressed {count} times.
      </p>
    </section>
  );
};