import React from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from '../../pages/Loading'
const HomePage = lazy(() => import("../../pages/Home"))
const AboutPage = lazy(() => import("../../pages/About"))
const ContactPage = lazy(() => import("../../pages/Contact"))
const NewsPage = lazy(() => import("../../pages/News"))
const GamesPage = lazy(() => import("../../pages/Games"))
const NotFoundPage = lazy(()=>import("../../pages/NotFound"))
const ServicesPage = lazy(()=>import("../../pages/Services"))
function MyRoutes() {
    return (
        <>
            <Suspense fallback={<LoadingPage/>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/games' element={<GamesPage />} />
                    <Route path='/servis' element={<ServicesPage />} />
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default MyRoutes
