import Layout from './Layout/Layout';
import {
  Competitions,
  InstantWins,
  History,
  Activity,
  Notification,
  Settings,
  TermsAndConditionsPage,
  PolicyPage,
  CokkiePolicyPage,
  Referrals,
  Wallet,
  Winners,
  Wheel,
  LiveGames,
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, ScrollToTop } from './components';
import './App.css';
const App = () => {
  return (
    <div className='transition'>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path='/' element={<Competitions />} />
            <Route path='/competitions' element={<Competitions />} />
            <Route path='/instantwins' element={<InstantWins />} />
            <Route path='/livegames' element={<LiveGames />} />
            <Route path='/winners' element={<Winners />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/notifications' element={<Notification />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/history' element={<History />} />
            <Route path='/referrals' element={<Referrals />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/wheel' element={<Wheel />} />
            <Route path='/cookiepolicy' element={<CokkiePolicyPage />} />
            <Route
              path='/termsandconditions'
              element={<TermsAndConditionsPage />}
            />
            <Route path='/policy' element={<PolicyPage />} />
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
