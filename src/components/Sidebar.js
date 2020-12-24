import React , {useState , useEffect }from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [{user}, dispatch] = useStateValue();

    const [seed, setSeed] = useState();

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);



    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow title="Covid-19 Information Center" Icon={LocalHospitalIcon}/>
            <SidebarRow title="Pages" Icon={EmojiFlagsIcon}/>
            <SidebarRow title="Friends" Icon={PeopleIcon}/>
            <SidebarRow title="Messenger" Icon={ChatIcon}/>
            <SidebarRow title="Marketplace" Icon={StorefrontIcon}/>
            <SidebarRow title="Videos" Icon={VideoLibraryIcon}/>
            <SidebarRow title="More" Icon={ExpandMoreIcon}/>
        </div>
    )
}

export default Sidebar
