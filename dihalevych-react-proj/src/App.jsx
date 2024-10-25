import './App.css';
import BasicRouter from './routes/BasicRouter';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <BasicRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;