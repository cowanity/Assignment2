import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import './homestyles.css';
import * as images from '../images/images';

function Home() {
    return (
        <div className="home-container">
            <Grid container spacing={0} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <div className="hero-banner">
                        <h2>
                            <span style={{ color: '#222', fontWeight: 'bold'}}> Welcome To Future Of Crypto</span><br />
                            <span style={{ color: '#222', fontWeight: 'bold'}}>
                            Making transaction <span style={{ color: '#2B86C5', fontWeight: 'bold'}}>FUN</span> again!
                            </span>
                        </h2>
                        <Link to="/assets" style={{ textDecoration: 'none'}}>
                            <Button variant="contained" color="primary" >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={9} sm={6} alignItems="center" justifyContent="center">
                    <img src={images.BlockchainImg} alt="Blockchain" className="imgBlockchain" />
                </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{ backgroundColor: '#222'}}>
                <Grid item xs={12} sm={6}>
                    <div className="pop-container">
                        <h2 className='pop-container-title'>Explore Our Platform</h2>
                        <h3 className='pop-container-title'>List of cryptocurrencies that is usable here!</h3>
                        
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={4}>
                                <div className="coin-container">
                                    <img src={images.BitcoinImg} alt="Bitcoin" className="coin-image"/>
                                    <p className='coinName'>Bitcoin</p>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <div className="coin-container">
                                    <img src={images.EthereumImg} alt="Ethereum" className="coin-image"/>
                                    <p className='coinName'>Ethereum</p>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <div className="coin-container">
                                    <img src={images.CronosImg} alt="Cronos" className="coin-image"/>
                                    <p className='coinName'>Cronos</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={4}>
                                <div className="coin-container">
                                    <img src={images.LitecoinImg} alt="Litecoin" className="coin-image"/>
                                    <p className='coinName'>Litecoin</p>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <div className="coin-container">
                                    <img src={images.UsdtImg} alt="USDT" className="coin-image"/>
                                    <p className='coinName'>USDT</p>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <div className="coin-container">
                                    <img src={images.PolkadotImg} alt="Polkadot" className="coin-image"/>
                                    <p className='coinName'>Polkadot</p>
                                </div>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <Link to="/assets" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" style={{marginBottom: '2.5rem', zIndex: '0'}}>
                                Trade Now!
                            </Button>
                        </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
