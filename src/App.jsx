import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/App.css';

import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from './contexts/SideBarProvider';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <SidebarProvider>
            <Sidebar />
            <BrowserRouter>
                <Suspense fallback={<div className='loading'>Loading...</div>}>
                    <Routes>
                        {routers.map((item, index) => {
                            return (
                                <Route
                                    path={item.path}
                                    element={<item.component />}
                                    key={index}
                                />
                            );
                        })}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </SidebarProvider>
    );
}

export default App;
