import { useState } from "react";

export function useMenuActive(active: string) {
	const [isMenuItemActive, setMenuItemActive] = useState<boolean>(false);
	const [activeMenuItemName, setActiveMenuItemName] = useState<string>(active);
	return {
		activeMenuItemName,
		setActiveMenuItemName,
		isMenuItemActive,
		setMenuItemActive,
	};
}
