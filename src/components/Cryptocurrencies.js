import React from 'react';
import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


 const Cryptocurrencies =()=>{
   const { data:cryptosList, isFetching } = useGetCryptosQuery()
  return (
    <div>Emmanuel</div>
  )
}

export default Cryptocurrencies;