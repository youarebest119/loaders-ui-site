import { useEffect, useRef, useCallback } from 'react';

type UseOutsideClickHandler = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = <T extends HTMLElement>(
    callback: UseOutsideClickHandler
) => {
    const ref = useRef<T>(null);

    const handleClickOutside = useCallback(
        (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(event);
            }
        },
        [callback]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [handleClickOutside]);

    return ref;
};
