import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./comps/Layout.tsx";
import ImageSlider from "./comps/ImageSlider.tsx";
import CustomSlider from "./comps/CustomSlider.tsx";
// import ResponsiveSlider from "./comps/ResponsiveSlider.tsx";
import PureResponsiveSlider from "./comps/PureResponsiveSlider.tsx";
// import {Section} from "./comps/Section.tsx";

export default function  Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout>
                    <ImageSlider/>
                </Layout>} />
                <Route path="/slide2" element={
                    <Layout>
                        <CustomSlider />
                    </Layout>
                } />
                <Route path="/slide3" element={
                        <PureResponsiveSlider/>
                } />
            </Routes>
        </BrowserRouter>
    );
}