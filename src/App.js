
import './assets/plugins/bootstrap/css/bootstrap.min.css'
import './assets/plugins/font-awesome/css/all.min.css'
import './assets/plugins/icomoon/style.css'
import './assets/plugins/switchery/switchery.min.css'
import './assets/css/concept.min.css'
import './assets/css/custom.css'

//import Chart from 'chart.js' - IMPORTACIÓN DE  CHARTSJS;
//import Chart from "react-apexcharts"  - importación de apexcharts;

import {HashRouter as Router} from 'react-router-dom'
import SwitchHelper from './components/layouts/SwitchHelper'


function App() {
  return (
    <Router>
      			<SwitchHelper />
    </Router>
  );
}

export default App;

