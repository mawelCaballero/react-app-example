import { useState } from 'react';
export const useProduct = (initCount: number) => {

    const [count, setCount] = useState(initCount);

    const increaseBy = (value: number) => {
        setCount(prev => Math.max(prev + value, 0));
    }

  return (
    { count, increaseBy }
  )
}
