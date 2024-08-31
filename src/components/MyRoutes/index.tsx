import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const HomePage = lazy(() => import("../../pages/Home"))
const AboutPage = lazy(() => import("../../pages/About"))
const ContactPage = lazy(() => import("../../pages/Contact"))
const NewsPage = lazy(() => import("../../pages/News"))
const GamesPage = lazy(() => import("../../pages/Games"))
const NotFoundPage = lazy(()=>import("../../pages/NotFound"))
function MyRoutes() {
    return (
        <>
            <Suspense fallback="loading...">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/games' element={<GamesPage />} />
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default MyRoutes
