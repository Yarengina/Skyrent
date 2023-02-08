import { QueryClient, QueryClientProvider } from 'react-query'
import AppRoutes from '../routes'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
