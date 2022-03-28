/// <reference path="./App.d.ts" />
import { HashRouter, Route, Routes } from 'react-router-dom';
import './normalize.css';
import './App.css';
import { AuthProvider } from './components/AuthProvider';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';
import { NotFound } from './components/NotFound';
import { PrivateRoute } from './components/PrivateRoute';
import { Welcome } from './pages/Welcome';

export const App = () => {
  return (
    // HashRouter is most compatible with Github Pages
    <HashRouter>
      <AuthProvider>
        <Navigation />
        <main>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="welcome" element={<Welcome />} />
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </AuthProvider>
    </HashRouter>
  );
};
