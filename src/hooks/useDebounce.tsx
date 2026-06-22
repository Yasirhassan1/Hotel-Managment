import { useEffect, useState } from "react";

interface DebounceProps {
	value: string;
	delay: number;
}
export function useDebounce(value: string, delay: number) {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(value);
		}, delay);
		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debounceValue;
}
