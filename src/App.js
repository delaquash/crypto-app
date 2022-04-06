import React from 'react'
import { Layout, Space, Typography } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar } from './component/index';


 const app = () => {
  return (
    <div className='app'>
        <h1>Emmanuel</h1>
        <div className='navBar'>
            <Navbar />
        </div>
        <div className='main'>

        </div>
        <div className='footer'>

        </div>
    </div>
  )
}
export default app;