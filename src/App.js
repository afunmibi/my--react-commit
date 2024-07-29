
import './App.css';
import User from './user';
import Comment from './comment/comment';
import Comment2 from './comment/thinking';
import Loading from './loading';
import Button from './comment/button';

function App() {
  return (
    <div className="App">
      <h1>I am back again</h1>
      <User mymy="Nigeria" />
      <Comment />
      <Comment2 />
      <Loading/>
      <Button />
    </div>
  );
}

export default App;
