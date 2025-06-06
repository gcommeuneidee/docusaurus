import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import { logout } from '../firebase';

export default function ColorModeToggleWrapper(props) {
	return (
		<>
		<button onClick={() => logout(() => window.location.reload())}>
			<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4l-5 4z"/></svg>
		</button>
		<ColorModeToggle {...props} />
		</>
	);
}