import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Update = lazy(() => import('../update/update'));
const Home = lazy(() => import('../home/home'));
export const AppRoutes = () => {
  const paths = [{ path: '/:id' }, { path: '/' }];

  return (
    <Suspense>
      <Routes>
        <Route path={paths[0].path} element={<Update></Update>}></Route>
        <Route path={paths[1].path} element={<Home></Home>}></Route>
      </Routes>
    </Suspense>
  );
};
