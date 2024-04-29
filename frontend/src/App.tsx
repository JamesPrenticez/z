
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Paths } from '@models';

import { ProtectedRoute } from '@components/auth';
import { Fallback, Layout } from '@components/layout';

import { 
  Home,
  Login,
  Logout,
  Register,
  UserSettings,
  TimerPage,
  NotFound,
} from '@pages';
import GenerateIdsPage from '@pages/Admin/GenerateIdsPage';

const App = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Layout>
        <Routes>
          <Route path={Paths.HOME} element={<Home />} />
          <Route path={Paths.LOGIN} element={<Login />} />
          <Route path={Paths.LOGOUT} element={<Logout />} />
          <Route path={Paths.REGISTER} element={<Register />} />
          <Route path={Paths.SETTINGS} element={
            <ProtectedRoute>
              <UserSettings />
            </ProtectedRoute>
          }/>
          <Route path={Paths.TIMER} element={<TimerPage />}></Route>
          <Route path="generate-ids" element={<GenerateIdsPage />}></Route>
          <Route path={Paths.NOT_FOUND} element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;

{/*
<Route path={Paths.TEST} element={<Test />} /> 
*/}