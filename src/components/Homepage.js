import React from 'react';
import millify from 'millify';
import { Col, Row, Statistic, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

 const Homepage = () =>{
   const { data, isFetching } = useGetCryptosQuery();
    console.log(data);

  return (
    <>
      <Typography level={2} className='heading'>
            Global Crypto Stats
      </Typography>
      <Row>
        <Col span={12}><Statistic Title="Total Cryptocurrencies" value="5" />Cryptocurrencies</Col>
        <Col span={12}><Statistic Title="Total Exchanges" value="5" />Exchanges</Col>
        <Col span={12}><Statistic Title="Total Market Cap" value="5" />Market Cap</Col>
        <Col span={12}><Statistic Title="Total Markets" value="5" />Markets</Col>
        <Col span={12}><Statistic Title="Total 24h Volume" value="5" />24h Volume</Col>
      </Row>
    </>

  )
}

export default Homepage;