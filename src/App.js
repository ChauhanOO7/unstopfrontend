import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApparelForm from './components/ApparelForm';
import ApparelList from './components/ApparelList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApparelForm />} />
        <Route path="/apparels" element={<ApparelList />} />
      </Routes>
    </Router>
  );
}

export default App;
