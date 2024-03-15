import "./historystyles.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import for token to get user's ID
import axios from 'axios';
import useAuthUser from "react-auth-kit/hooks/useAuthUser"; 
import { useState } from "react";
import { useEffect } from "react";




const WhiteTextTableCell = styled(TableCell)({
    color: '#fff',
    fontWeight: 'bold'
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#64646434',
    boxShadow: '0 4px 8px rgba(99, 98, 98, 0.336)',
    color: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const TransactionItem = ({ id, name, amount, currency, billId, date, message, accountNumber }) => {
    // Determine if the transaction is sent or received
    const isSent = amount < 0;
    const formattedAmount = `${isSent ? '-' : '+'} ${Math.abs(amount)}`;
    const amountColor = isSent ? '#DC143C' : 'green';

    // Map currency type to its symbol
    const currencySymbolMap = {
        bitcoin: 'BTC',
        dollar: '$',
        ethereum: 'ETH',
    };

    // Get the currency symbol based on the provided currency type
    const currencySymbol = currencySymbolMap[currency.toLowerCase()] || '';

    return (
        <TableRow>
            <WhiteTextTableCell>{id}</WhiteTextTableCell>
            <WhiteTextTableCell>{accountNumber}</WhiteTextTableCell>
            <WhiteTextTableCell>{name}</WhiteTextTableCell>
            <WhiteTextTableCell style={{ color: amountColor }}>{formattedAmount} {currencySymbol}</WhiteTextTableCell>
            <WhiteTextTableCell>{billId}</WhiteTextTableCell>
            <WhiteTextTableCell>{date}</WhiteTextTableCell>
            <WhiteTextTableCell>{message}</WhiteTextTableCell>
        </TableRow>
    );
};

const History = () => {
    // ---------------------------------------Retrieve user's ID from token---------------------------------------
    // Get the current user's email
    const auth = useAuthUser();
    const userEmail = auth.authState.email;
    console.log('User email:', userEmail);
    // Define state to store user ID
    const [userID, setUserID] = useState(null);

     // Effect to fetch user ID based on email
     useEffect(() => {
        const fetchUserID = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/users/accounts?email=${userEmail}`);
                setUserID(response.data.id);
                console.log('User ID:', response.data.id);
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };
        fetchUserID();
    }, [userEmail]);
    // ------------------------------------------------------------------------------------



    // Dummy transaction data for demonstration
    const transactionHistory = [
        { id: 1, name: 'Doan Nguyen Duc', amount: -100, currency: 'dollar', billId: 'B12345', date: '2022-10-15', message: 'Tien mua nuoc nha anh zai', accountNumber: '1234567890' },
        { id: 2, name: 'Pham Nhat Vuong', amount: 150, currency: 'dollar', billId: 'B67890', date: '2022-10-16', message: 'deal', accountNumber: '0987654321' },
        { id: 3, name: 'Truong My Lan', amount: -50, currency: 'bitcoin', billId: 'B24680', date: '2022-10-17', message: 'banh mi hoi chieu', accountNumber: '5432109876' },
        { id: 4, name: 'Trinh Van Quyet', amount: 200, currency: 'ethereum', billId: 'B13579', date: '2022-10-18', message: 'cam lay va cut di', accountNumber: '6789054321' },
        { id: 5, name: 'Pham Thi Bich Hong', amount: -80, currency: 'bitcoin', billId: 'B97531', date: '2022-10-19', message: 'khoi thoi', accountNumber: '4321098765' },
        { id: 6, name: 'Johny Dang', amount: 300, currency: 'dollar', billId: 'B75319', date: '2022-10-20', message: 'tien hoi lo', accountNumber: '5678901234' },
        { id: 7, name: 'Nguyen Van Vo', amount: -120, currency: 'dollar', billId: 'B75320', date: '2022-10-21', message: 'bat pho hom qua', accountNumber: '3456789012' },
        { id: 8, name: 'Tran Thi Buoi', amount: 180, currency: 'dollar', billId: 'B75321', date: '2022-10-22', message: 'ai cho t luong thien', accountNumber: '4567890123' },
        // Add more transaction objects here
    ];
    

    return (
        <div className='history-container'>
            <Grid container spacing={0} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <div className="historyPage-title">
                    {userID !== null && userID !== undefined ? (
                        <h1>User ID: {userID}</h1>
                    ) : (
                        <p>Loading user ID...</p>
                    )}
                        <h2>
                            Transaction History
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
            <Box sx={{ flexGrow: 1 }} style={{ paddingTop: '3vh', paddingBottom: '40vh', paddingLeft: 16, paddingRight: 16, backgroundColor: '#222' }}>
                <TableContainer component={Paper}>
                    <Table style={{backgroundColor: '#999'}}>
                        <TableHead>
                            <TableRow>
                                <WhiteTextTableCell>Transaction ID</WhiteTextTableCell>
                                <WhiteTextTableCell>Account Number</WhiteTextTableCell>
                                <WhiteTextTableCell>Name</WhiteTextTableCell>
                                <WhiteTextTableCell>Amount</WhiteTextTableCell>
                                <WhiteTextTableCell>Bill ID</WhiteTextTableCell>
                                <WhiteTextTableCell>Date</WhiteTextTableCell>
                                <WhiteTextTableCell>Message</WhiteTextTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactionHistory.map((transaction) => (
                                <TransactionItem key={transaction.id} {...transaction} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
}

export default History;
