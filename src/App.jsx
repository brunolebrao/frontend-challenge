import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Divider } from 'antd'

import { ThemeProvider } from 'styled-components'
import { SubHeader, Layout } from 'components'

import { routes } from 'views/routes'
import plurall from 'styles/theme'
import './App.module.css'

const App = () => {
  const { location } = useHistory()
  const breadcrumb = routes.find(route => route.path === location.pathname)
  return (
    <ThemeProvider theme={plurall}>
      <Layout>
        <SubHeader
          breadcrumb={[{ text: breadcrumb.name }]}
          heading={breadcrumb.title}
        />
        <Divider />
        {routes.map(({ name, path, component, exact }) => (
          <Route key={name} exact={exact} path={path} component={component} />
        ))}
      </Layout>
    </ThemeProvider>
  )
}

export default App
