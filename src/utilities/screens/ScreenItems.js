import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalMallIcon from '@material-ui/icons/LocalMall';

export const itemsList = [
    {
        id: 0,
        screen: 'Home',
        icon: <HomeIcon />,
        route: '/me'
    },
    {
        id: 1,
        screen: 'About Me',
        icon: <InfoIcon />,
        route: '/about'
    },
    {
        id: 2,
        screen: 'Skills',
        icon: <MenuBookIcon />,
        route: '/skills'
    },
    {
        id: 3,
        screen: 'Projects',
        icon: <LocalMallIcon />,
        route: '/projects'
    }
];

