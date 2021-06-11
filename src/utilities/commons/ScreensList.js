import Home from '../../views/main/Home';
import About from '../../views/main/About';
import Skills from '../../views/main/Skills';
import Projects from '../../views/main/Projects'

import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FaceIcon from '@material-ui/icons/Face';

export const screensList = [
    {
        id: 0,
        path: '/me',
        component: <Home />,
        name: 'Home',
        icon: <HomeIcon />,
    },
    {
        id: 1,
        path: '/about',
        component: <About />,
        name: 'About Me',
        icon: <FaceIcon />,
    },
    {
        id: 2,
        path: '/skills',
        component: <Skills />,
        name: 'Skills',
        icon: <MenuBookIcon />,
    },
    {
        id: 3,
        path: '/projects',
        component: <Projects />,
        name: 'Projects',
        icon: <LocalMallIcon />,
    }
];