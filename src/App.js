import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './components/SearchPage';
import JobDetailsPage from './components/JobDetailsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1 className='HeadingText'>
          <span>Github</span> Jobs
        </h1>
        <Route path='/job-details/:name/:id' exact component={JobDetailsPage} />
        <Route path='/' exact component={SearchPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
