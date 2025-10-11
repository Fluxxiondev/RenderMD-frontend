import { Button } from './components/ui/button';
import { Link } from 'react-router';

function App() {
  return (
    <>
      <Button type="button" className="cursor-pointer">
        <Link to="/login">Go to Login</Link>
      </Button>
    </>
  );
}

export default App;
