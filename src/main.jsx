
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Home } from "./pages/Home/Home"
import { Contato } from "./pages/Contato/Contato"
import { Sobre } from "./pages/Sobre/Sobre"
import { Pagina404 } from "./pages/Pagina404/Pagina404"
import { Layout } from './pages/Layout'
import { Estado1 } from './pages/Estado1'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const rotas = createBrowserRouter([
//   {path:"/", element: <Layout/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},
//   {path:"*", element: <Pagina404/>}
// ])

const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/> 
    <Route path='home' element={<Home/>}/> 
    <Route path='contato' element={<Contato/>}/> 
    <Route path='sobre' element={<Sobre/>}/> 
    <Route path='estado1' element={<Estado1/>}/>
    <Route path='*' element={<Pagina404/>}/> 
  </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={rotas} />

  </StrictMode>,
)
