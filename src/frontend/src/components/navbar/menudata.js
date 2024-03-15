import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';



export const MenuData = [
    {
        title: 'Home',
        url: '/home',
        cName: 'nav-links',
        icon: <HomeIcon className="nav-icons" style={{ verticalAlign: 'middle', paddingRight: '5px' }} />
    },

    {
        title: 'Transfer',
        url: '/assets',
        cName: 'nav-links',
        icon: <MonetizationOnIcon className="nav-icons" style={{ verticalAlign: 'middle', paddingRight: '5px' }} />
    },

    {
        title: 'History',
        url: '/history',
        cName: 'nav-links',
        icon: <ReceiptIcon className="nav-icons" style={{ verticalAlign: 'middle', paddingRight: '5px' }} />
    },

    {
        title: 'Login',
        url: '/login',
        cName: 'nav-links',
        icon: <ReceiptIcon className="nav-icons" style={{ verticalAlign: 'middle', paddingRight: '5px' }} />
    }
]
