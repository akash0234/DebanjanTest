import logo from './logo.svg';
import Counter from './Counter';
import Layout from './Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Counter start={10} />
      </Layout>
    </div>
  );
}


export default App;
