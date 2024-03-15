import { Outlet } from 'react-router-dom';
import useMobile from './hooks/useMobile';
import ErrorPage from './pages/ErrorPage';

function App() {
  const { isMobile } = useMobile();
  return (
    <main>
      {/*  */}
      {isMobile === true ? <Outlet /> : <ErrorPage />}
    </main>
  );
}

export default App;
