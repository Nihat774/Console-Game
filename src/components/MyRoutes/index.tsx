import { lazy, Suspense } from "react";
import LoadingPage from "../../pages/Loading";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const HomePage = lazy(() => import("../../pages/Home"));
const AboutPage = lazy(() => import("../../pages/About"));
const ContactPage = lazy(() => import("../../pages/Contact"));
const NewsPage = lazy(() => import("../../pages/News"));
const GamesPage = lazy(() => import("../../pages/Games"));
const NotFoundPage = lazy(() => import("../../pages/NotFound"));
const ServicesPage = lazy(() => import("../../pages/Services"));
const SingleGamePage = lazy(() => import("../SingleGame"));
const LikedPage = lazy(() => import("../../pages/LikedPage"));

function MyRoutes() {
  const location = useLocation();
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/:id" element={<SingleGamePage />} />
            <Route path="/servis" element={<ServicesPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="likedgame" element={<LikedPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default MyRoutes;
