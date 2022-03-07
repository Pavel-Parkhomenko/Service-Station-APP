import React from 'react';
import { useRoutes } from './components/routes'

function App() {
  const routes = useRoutes()
  return (
    <>
      {routes}
    </>
  )
}

export default App;