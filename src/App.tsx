import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeProvider } from './components/theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen />
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App