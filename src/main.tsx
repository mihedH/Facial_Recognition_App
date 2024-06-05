import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from './Provider.tsx'
import Root from './root.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Root /> 
    </Provider>
  </React.StrictMode>,
)
