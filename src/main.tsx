import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx';
import { router } from './app/router.tsx';
import { RouterProvider } from 'react-router-dom';
import AppProvider from 'providers/AppProviders.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppProvider>
			<App>
				<RouterProvider router={router} />
			</App>
		</AppProvider>
	</StrictMode>,
)