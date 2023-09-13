import './index.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Sidebar = () => {
  return (
    <aside>Sidebar
        {/*user icon*/}
        <AccountBoxIcon/>
        {/* user name */}
        {/* 4 buttons for the different pages */}
        <button>Login/Create</button>
        <button>New Book</button>
        <button>View Books</button>
        <button>Light Switch</button>
    </aside>
  );
}

export default Sidebar
