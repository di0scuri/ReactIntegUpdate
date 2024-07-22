
import { Link, useLocation } from 'react-router-dom';
/* import SettingsDept from './SettingsDept';
import SettingsQuestions from './SettingsQuestions';
import SettingsNotifs from './SettingsNotifs'; */
import './Settings.css';

function Settings() {
  const location = useLocation();

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h2>Settings</h2>
      </header>
      <nav className="settings-nav">
        <ul className="nav-list">
          <li className={location.pathname === "/settings/departments" ? "active" : ""}>
            <Link to="/login/adminLogin/AdminLoginPage/settings/departments">Departments</Link>
          </li>
          <li className={location.pathname === "/settings/questions" ? "active" : ""}>
            <Link to="/login/adminLogin/AdminLoginPage/settings/questions">Questions</Link>
          </li>
          <li className={location.pathname === "/settings/notifications" ? "active" : ""}>
            <Link to="/login/adminLogin/AdminLoginPage/settings/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Settings;
