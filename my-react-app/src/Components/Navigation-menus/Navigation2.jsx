import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    
    PowerIcon,
  } from "@heroicons/react/24/solid";

  import Dark_mode from '../Dark-mode';
  import { useNavigate } from "react-router-dom";
  
  export function Navigation2() {
    const navigate = useNavigate();
    const onLogout = () => {
      localStorage.removeItem('isLoggedIn'); // Borra el estado de autenticación al cerrar sesión
      navigate("/login", {
        replace: true,
      });
    };

    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 dark:text-white dark:border-solid dark:border-2 dark:border-white-600 border-solid border-2 border-black-600 ">
        <div className="mb-2 gap-6 flex justify-between dark:border-solid dark:border-2 dark:border-white-600 border-solid border-2 border-black-600 p-6 w-200">
            <div>
          <Typography variant="h5" color="blue-gray">
            Navegación
          </Typography>
          </div>
          <div>
            <Dark_mode/>
          </div>
        </div>
        <List>
        <a href="/">
          <ListItem className="flex justify-start gap-6">
            
            
            <div>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5 flex g-8" />
              
            </ListItemPrefix>
            
            </div>
            <div>
            Home
            </div>
            
          </ListItem>
          </a>
          <a  href="/overview">
          <ListItem className="flex justify-start gap-6">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Overview
          </ListItem>
          </a>
          <a  href="/contact">
          <ListItem ListItem className="flex justify-start gap-6">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contact
          </ListItem>
          </a>
          <ListItem className="flex justify-start gap-6" >
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <button onClick={onLogout}>
          <ListItem className="flex justify-start gap-6">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
          </button>
        </List>
      </Card>
    );
  }