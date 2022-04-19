import React, { useState } from 'react';
import { Col, Row, Select, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { DollarCircleOutlined, ExclamationCircleOutlined, FundOutlined, MoneyCollectOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;


 const CryptoDetails =()=>{
   const { coinID } = useParams();
   const [timePeriod, setTimePeriod] = useState('7d')
  return (
    <div>Emmanuel {coinID} </div>
  )
}

export default CryptoDetails;