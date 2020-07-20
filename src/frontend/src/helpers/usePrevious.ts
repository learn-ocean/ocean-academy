import { useRef, useEffect } from "react";

export const usePrevious = (value: any) => {
    const ref = useRef(value);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }