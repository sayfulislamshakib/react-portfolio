import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { Header } from './component/Header/Header';
import { Mainheader } from './component/Mainheader/Mainheader';
import { Love } from './component/Love/Love';
import { Aboutme } from './component/Aboutme/Aboutme';
// import { Myskills } from './component/Myskills/Myskills';

function App() {
  return (
    <div>
      <Header></Header>
      <Mainheader></Mainheader>
      <Love></Love>
      <Aboutme></Aboutme>
      {/* <Myskills></Myskills> */}
    </div>
  );
}

export default App;
