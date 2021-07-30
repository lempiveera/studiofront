import './App.css';
import Presentlist from './Components/Presentlist';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Downstairs from './Components/Downstairs';
import Upstairs from './Components/Upstairs';
import Sumu from './Components/Sumu';
//import Typography from '@material-ui/core/Typography';

function App() {

  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">
      <AppBar position="static" color="transparent"> 
        <Tabs textColor="inherit" indicatorColor="primary" value={value} onChange={handleChange}>
          <Tab value="one" label="Current situation"/>
          <Tab value="two" label="Downstairs" />
          <Tab value="three" label="Upstairs" />
          <Tab value="four" label="Sumu" />
        </Tabs>
      </AppBar>
        {value === 'one' && <Presentlist />}
        {value === 'two' && <Downstairs />}
        {value === 'three' && <Upstairs />}
        {value === 'four' && <Sumu />}
    </div>
  );
}

export default App;
