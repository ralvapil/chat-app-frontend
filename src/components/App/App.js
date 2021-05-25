import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import { selectIsAuthorized } from '../../features/auth/authSlice';
import DesktopWindow from '../DesktopComponents/DesktopWindow/DesktopWindow';
import MobileChatListWindow from '../MobileComponents/MobileChatListWindow/MobileChatListWindow';
import MobileChatWindow from '../MobileComponents/MobileChatWindow/MobileChatWindow';
import MobileContactList from '../MobileComponents/MobileContactList/MobileContactList';
import MobileAddContact from '../MobileComponents/MobileAddContact/MobileAddContact';
import MobileNewChat from '../MobileComponents/MobileNewChat/MobileNewChat';

import { SocketProvider } from '../Contexts/socketContext';

import Login from '../SharedComponents/components/Login/Login';
import ProtectedRoute from '../SharedComponents/components/ProtectedRoute/ProtectedRoute';

import './App.css';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  // Run an api call to check if this person is authorized
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <div className="App" style={{ maxHeight: '100vh' }}>
      <Router>
        <Switch>
          <Route path="/login">
            {isAuthorized ? <Redirect to="/chat" /> : <Login />}
          </Route>
          <SocketProvider>
            <ProtectedRoute path="/chat/:cid">
              {isDesktopOrLaptop ? <DesktopWindow /> : <MobileChatWindow />}
            </ProtectedRoute>
            <ProtectedRoute path="/chats">
              {isDesktopOrLaptop ? <DesktopWindow /> : <MobileChatListWindow />}
            </ProtectedRoute>
            <ProtectedRoute path="/contacts">
              {isDesktopOrLaptop ? <DesktopWindow /> : <MobileContactList />}
            </ProtectedRoute>
            <ProtectedRoute path="/contact-add">
              {<MobileAddContact />}
            </ProtectedRoute>
            <ProtectedRoute path="/new-chat">
              {<MobileNewChat />}
            </ProtectedRoute>
          </SocketProvider>
          <Route path="*">
            <div> 404 Page Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
