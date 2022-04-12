import React from 'react';
import millify from 'millify';
import { Col, Row, Statistic, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;

 const Homepage = () =>{
   const { data, isFetching } = useGetCryptosQuery(10);
   const globalStats = data?.data?.stats;
    if(isFetching) return 'Loading....';

  return (
    <>
      <Typography level={2} className='heading'>
            Global Crypto Stats
      </Typography>
      <Row>
        <Col span={12}><Statistic Title="Total Cryptocurrencies" value={globalStats.total} />Cryptocurrencies</Col>
        <Col span={12}><Statistic Title="Total Exchanges" value={millify(globalStats.totalExchanges)} />Exchanges</Col>
        <Col span={12}><Statistic Title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/>Market Cap</Col>
        <Col span={12}><Statistic Title="Total Markets" value={millify(globalStats.totalMarkets)} />Markets</Col>
        <Col span={12}><Statistic Title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />24h Volume</Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified/>
    </>

  )
}

export default Homepage;