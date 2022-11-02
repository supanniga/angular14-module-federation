
Promise.all([
	// loadRemoteEntry({
	// 	type: 'module',
	// 	remoteEntry: 'http://localhost:4201/remoteEntry.js',
	// }),
	// loadRemoteEntry({
	// 	type: 'module',
	// 	remoteEntry: 'http://localhost:4202/remoteEntry.js',
	// }),
])
	.catch((err) => console.error('Error loading remote entries', err))
	.then(() => import('./bootstrap'))
	.catch((err) => console.error(err));
