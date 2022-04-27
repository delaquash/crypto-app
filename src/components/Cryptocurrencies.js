import React, { useState, useEffect } from 'react';
import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

 const Cryptocurrencies =({ simplified })=>{
   const count = simplified ? 10 : 100;
  //  renamed data to cryptoList
   const { data:cryptoList, isFetching } = useGetCryptosQuery(count);
   const [ cryptos, setCryptos ] = useState();
   const [searchItem, setSearchItem] = useState('')

     
    useEffect(() => {
      const filteredCrypto = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchItem));
      setCryptos(filteredCrypto)
     
    }, [cryptoList, searchItem])
    
    if (isFetching) return <Loader />;
  return (
    <>
    {!simplified && (
        <div className="search-crypto">
             <Input
                    placeholder='Search Cryptocurrency' onChange={(e) =>setSearchItem(e.target.value.toLowerCase()) } />
        </div>
    )}
      <Row gutter={[ 32, 32]} className="crypto-card-container">
        {
          cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
              <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' src={currency.iconUrl} alt="Coin"/>}
                  hoverable
                >
                  <p>Price:{millify(currency.price)}</p>
                  <p>Market Cap:{millify(currency.marketCap)}</p>
                  <p>Daily Changes:{millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))
        }
    </Row>
    </>
  );
};

export default Cryptocurrencies;
