import Encabezado from './Encabezado'
import Navegacion from './Navegacion'
import PiePagina from './PiePagina'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Encabezado />
      <Navegacion />
      <main>
        <Outlet />
      </main>
      <PiePagina />
    </>
  )
}

export default Layout
