import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AppRoutes from './routes/AppRoutes';
import { AuthProviderWrapper } from './contexts/auth.context';
import Navegation from './components/Nav/Nav';

function App() {

  return (

    <div className="App">
      <AuthProviderWrapper>
        <Navegation />
        <AppRoutes />

      </AuthProviderWrapper>

    </div>
  )
}

export default App;
