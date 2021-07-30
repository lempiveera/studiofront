import './App.css';
import Presentlist from './Components/Presentlist';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
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
          <Tab value="three" label="Upstrais" />
          <Tab value="four" label="Sumu" />
        </Tabs>
      </AppBar>
        {value === 'one' && <Presentlist />}
        {value === 'two' && <Presentlist />}
        {value === 'three' && <Presentlist />}
        {value === 'four' && <Presentlist />}
    </div>
  );
}

export default App;
