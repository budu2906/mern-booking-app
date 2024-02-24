import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import { AppContextProvider } from './contexts/AppContext'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      retry: 0
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
    <App />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

