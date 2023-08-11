import { GitHub, LinkedIn } from '@mui/icons-material';
import './Sidebar.sass';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <a href="https://github.com/jfzini" target="_blank" className="socials__link" rel="noreferrer">
        <GitHub fontSize="inherit" />
      </a>
      <a href="https://www.linkedin.com/in/jfzini/" target="_blank" className="socials__link" rel="noreferrer">
        <LinkedIn fontSize="inherit" />
      </a>
    </aside>
  );
}
