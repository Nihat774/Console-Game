
import { lazy, Suspense } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import LoadingPage from '../../pages/Loading'
const HomePage = lazy(() => import("../../pages/Home"))
const AboutPage = lazy(() => import("../../pages/About"))
const ContactPage = lazy(() => import("../../pages/Contact"))
const NewsPage = lazy(() => import("../../pages/News"))
const GamesPage = lazy(() => import("../../pages/Games"))
const NotFoundPage = lazy(()=>import("../../pages/NotFound"))
const ServicesPage = lazy(()=>import("../../pages/Services"))
const SingleGamePage = lazy(()=>import("../SingleGame"))
function MyRoutes() {
    const { id } = useParams()
    console.log(id);
    return (
        <>
            <Suspense fallback={<LoadingPage/>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/games' element={<GamesPage />} />
                    <Route path={`http://localhost:3000/allgames/${id}`} element={<SingleGamePage />} />
                    <Route path='/servis' element={<ServicesPage />} />
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default MyRoutes
