import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AppLayout from '../components/AppLayout/AppLayout'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import ViewCart from "../pages/ViewCart/ViewCart";
import CoursesCategories from "../pages/Courses/CoursesCategories";

export const BASE_PATH = '/'

const Router = () => {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    {/* Not Authenticated Routes */}
                    <Route path={`${BASE_PATH}`} element={<Home />} />
                    <Route path={`${BASE_PATH}/login`} element={<Login />} />
                    <Route path={`${BASE_PATH}/signup`} element={<SignUp />} />
                    <Route path={`${BASE_PATH}/cart`} element={<ViewCart />} />
                    <Route path={`${BASE_PATH}/courses/:slug`} element={<CoursesCategories />} />
                    {/* Authenticated Routes */}
                </Routes>
            </AppLayout>
        </BrowserRouter>
    )
}

export default Router
