import React  , {useState , useEffect}from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Header() {

    const [{user}, dispatch] = useStateValue();
    const [darkMode , setDarkMode] = useState(true)
    const [themeText,setThemeText] = useState('Dark Mode')

    const body = document.body

    useEffect(() => {
        const existingPreference = localStorage.getItem("theme");
        if(existingPreference){
            if(existingPreference === 'Dark Mode'){
                setDarkMode(true)
                setThemeText('Light Mode')
                body.classList.add('dark-mode')
            } else if(existingPreference === 'Light Mode') {
                setDarkMode(false);
                setThemeText('Dark Mode')
                body.classList.remove('dark-mode')
              }
              else  {
                localStorage.setItem("theme", "Light Mode");
              }
        }

    }, []);

    const logout = () => {
        dispatch({
            type: actionTypes.EMPTY_USER,
            user: null
        })
    }

    const handleTheme = () => {
        setDarkMode(darkMode === true ? false : true)
        if(darkMode === true) {
            body.classList.add('dark-mode')
            setThemeText('Light Mode')
            localStorage.setItem("theme", "Dark Mode");
        } else if (darkMode === false) {
            body.classList.remove('dark-mode')
            setThemeText('Dark Mode')
            localStorage.setItem("theme", "Light Mode");
        }
    }

    const StyledMenu = withStyles({
        paper: {
          border: '1px solid #d3d4d5',
        },
      })((props) => (
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          {...props}
        />
      ));

      const StyledMenuItem = withStyles((theme) => ({
        root: {
            '&:hover': {
                backgroundColor: '#4267B2',
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                  color: theme.palette.common.white,
            }},
            '.MuiListItemIcon-root, & .MuiListItemText-primary': {
              color: theme.palette.common.black,
          },
        },
      }))(MenuItem);
      
      
        const [anchorEl, setAnchorEl] = useState(null);
      
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };

    return (
        <div className="header">
            
            <div className="header__left">

                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt=""/>
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                    <div className="header__info">
                        <Avatar src={user.photoURL}/>
                        <h4>Khizer</h4>
                    </div>

                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon/>
                    </IconButton>
                         <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            onClick={handleClick} >
                            <ExpandMoreIcon/>
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem onClick={handleTheme}>
                                <ListItemIcon>
                                    <Brightness4Icon fontSize="small" />
                                </ListItemIcon>
                                    <ListItemText primary={themeText} />
                            </StyledMenuItem>
                            <StyledMenuItem onClick={logout}>
                                <ListItemIcon>
                                    <ExitToAppIcon fontSize="small" />
                                </ListItemIcon>
                                    <ListItemText primary="Logout" />
                                </StyledMenuItem>
                        </StyledMenu>
            </div>

        </div>
    )
}

export default Header
