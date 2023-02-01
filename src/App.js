import './App.css';
import { CanvasAnimation } from './pages/canvas/canvasAnimation';
import { CanvasBase } from './pages/canvas/canvasBase';
import { CanvasSnow } from './pages/canvas/canvasSnow';


function App() {
  return (
    <div className="App">
      {/* <CanvasBase /> */}
      {/* <CanvasAnimation /> */}
      <CanvasSnow />
    </div>
  );
}

export default App;
