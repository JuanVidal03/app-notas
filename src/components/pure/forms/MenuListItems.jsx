import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home } from '@mui/icons-material';
import {  useNavigate } from 'react-router-dom';


//obtiene el icono dependiendo del path
const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return ( <Home/> )

        case 'TASK':
            return ( <Task/> )

        case 'SETTINGS':
            return ( <Settings/> )
    
        default:
            break;
    }
}

const MenuListItems = ({ list }) => {
    //navigate para acceder a las rutas dependiendo el path
    const navigate = useNavigate();

    <List>
        { list.map(({text, path, icon}, index) => 
        (
            <ListItem key={ index } button onClick={() => navigate(path)} >

                <ListItemIcon>
                    { getIcon(icon )}
                </ListItemIcon>
                <ListItemText primary={ text }/>

            </ListItem>
        )) }
    </List>
}


export default MenuListItems;
