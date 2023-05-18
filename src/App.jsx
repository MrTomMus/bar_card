import './App.module.css';
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
          <div className={classes.title}>
            <h1>Bar Card</h1>
            <button>View bar</button>
          </div>
      </div>
    </div>
  );
}

export default App;
