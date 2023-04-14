import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/navigation.component'

const RootLayout = () => {
  return (
        <Fragment>
            <Navigation/>
            <Outlet/>
        </Fragment>
  )
}

export default RootLayout
