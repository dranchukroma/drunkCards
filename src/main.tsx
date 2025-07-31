import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx';
import { router } from './app/router.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App>
			<RouterProvider router={router} />
		</App>
	</StrictMode>,
)