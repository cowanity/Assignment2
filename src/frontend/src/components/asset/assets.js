import React, { useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import './assetstyles.css'; // Importing the assetstyle.css file

//Declare Customer Constructor
class Customer {
    constructor(name, bitcoin, ethereum, dollar) {
        this.name = name;
        this.bitcoin = bitcoin;
        this.ethereum = ethereum;
        this.dollar = dollar;
    }

    get getName() {
        return this.name;
    }
    set setName(setname) {
        this.name = setname;
    }

    get getBitcoin() {
        return this.bitcoin;
    }
    set setBitcoin(setbitcoin) {
        this.bitcoin = setbitcoin;
    }

    get getEthereum() {
        return this.ethereum;
    }
    set setEthereum(setethereum){
        this.ethereum = setethereum;
    }

    get getDollar() {
        return this.dollar;
    }
    set setDollar(setdollar) {
        this.dollar = setdollar;
    }
}

//Assign sample customers
Customer[0] = new Customer(
    "Phan Vu", 100, 100, 100
)
Customer[1] = new Customer(
    "Phong Pham", 100, 100, 100
)
Customer[2] = new Customer(
    "Nguyen Kien", 100, 100, 100
)

//Get balace for customers
function info (name, coinName) {
    for (let i = 0; i<3; i++) {
        if (name === Customer[i].getName){
            switch (coinName) {
                case "Bitcoin":
                    return Customer[i].getBitcoin;
                case "Ethereum":
                    return Customer[i].getEthereum;
                case "Dollar":
                    return Customer[i].getDollar;
                default:
                    console.log("Error: In info function");
            }
        }
    }
}

//Function transfer money
function deposit (name, depositMoney, coinName) {
    for (let i = 0; i<3; i++) {
        if (name === Customer[i].getName){
            switch (coinName) {
                case "Bitcoin":
                    Customer[i].setBitcoin = Customer[i].getBitcoin - depositMoney;
                    break;
                case "Ethereum":
                    Customer[i].setEthereum = Customer[i].getEthereum - depositMoney;
                    break;
                case "Dollar":
                    Customer[i].setDollar = Customer[i].getDollar - depositMoney;
                    break;
                default:
                    console.log("Error: In deposit function");
            }
        }
    }
}

//Render function
function Assets() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCurrency] = useState('');
    const [selectedAuthor, setSelectedAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [balance, setBalance] = useState({x: null});

    //Newly added
    const [sign, setSign] = useState({x: "Please select currency and account for transfer"});

    //Declare signs
    const signEthereum = "Ξ" 
    const signBitcoin = "₿"
    const signDollar = "$"

    const assets = [];

    const filteredAssets = assets.filter(asset => {
        return (
            asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === '' || asset.category === selectedCategory)
        );
    });

    if (selectedAuthor !== "" && selectedCategory !== "") {
        //Print balance
        balance.x = "Balance: " + info(selectedAuthor, selectedCategory);
        //Print Sign
        switch (selectedCategory) {
            case "Bitcoin":
                sign.x = signBitcoin;
                break;
            case "Ethereum":
                sign.x = signEthereum;
                break;
            case "Dollar":
                sign.x = signDollar;
                break;
            default:
                console.log("Error: before transfer clicked");
        }
    } else {
        balance.x = '';
        sign.x = "Please select currency and account for transfer";
    }
        
    //Active after click transfer
    const handleTransfer = () => {
        //main transfer process
        if (selectedAuthor !== ""  && selectedCategory !== "") {
            if(amount !== ''){
                //Transfer process
                deposit(selectedAuthor, amount, selectedCategory);
                setBalance({ x: "Balance: " + info(selectedAuthor, selectedCategory) });
            } else {
                balance.x = null;
                sign.x = "Enter an amount you want to transfer";
            }
        } else {
            balance.x = '';
            sign.x = "Please select currency and account for transfer";
        }

        //Original
        console.log("Transfer amount:", amount);
        console.log("Transfer message:", message);
    };

    return (
        <>
            <div className='asset-container'>
                <Grid container spacing={0} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <div className="assetsPage-title">
                            <h2>
                                Transfer
                                <Divider />
                                <Typography
                                    sx={{ mt: 0.2, ml: 1 }}
                                    color="text.secondary"
                                    display="block"
                                    variant="caption"
                                >
                                </Typography>
                            </h2>
                        </div>
                    </Grid>
                </Grid>
                <Paper sx={{padding: '2rem', backgroundColor: '#222', marginBottom: '0.5rem' }}>
                    <Typography variant="h6" className="white-text-center">
                        {balance.x}{sign.x}
                    </Typography>
                </Paper>

                <Paper sx={{ padding: '2rem', backgroundColor: '#222', marginBottom: '2rem' }} className="fill-out-area">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel className="white-text-center">Currency</InputLabel>
                                <Select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCurrency(e.target.value)}
                                    className="white-text-center"
                                    style={{ backgroundColor: '#999', color: '#fff' }}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="Ethereum">Ethereum</MenuItem>
                                    <MenuItem value="Bitcoin">Bitcoin</MenuItem>
                                    <MenuItem value="Dollar">Dollar</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel className="white-text-center">Account</InputLabel>
                                <Select
                                    value={selectedAuthor}
                                    onChange={(e) => setSelectedAccount(e.target.value)}
                                    className="white-text-center"
                                    style={{ backgroundColor: '#999', color: '#fff' }}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="Phan Vu">PHAN VU</MenuItem>
                                    <MenuItem value="Phong Pham">PHAM DO TIEN PHONG</MenuItem>
                                    <MenuItem value="Nguyen Kien">NGUYEN TRUNG KIEN </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Amount"
                                type="number"
                                fullWidth
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                InputLabelProps={{ className: "white-text-center" }}
                                InputProps={{
                                    className: "white-text-center",
                                    style: { backgroundColor: '#999', color: '#fff' }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Message"
                                fullWidth
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                InputLabelProps={{ className: "white-text-center" }}
                                InputProps={{
                                    className: "white-text-center",
                                    style: { backgroundColor: '#999', color: '#fff' }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Button variant="contained" color="primary" onClick={handleTransfer}>
                                Transfer
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    );
}

export default Assets;
