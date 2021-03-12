import {   
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { useMediaQuery } from "react-responsive";
import { useSelector } from 'react-redux'

import { selectIsAuthorized } from '../../features/auth/authSlice';
import DesktopChatWindow from '../DesktopComponents/DesktopChatWindow/DesktopChatWindow'
import MobileChatListWindow from '../MobileComponents/MobileChatListWindow/MobileChatListWindow'
import MobileChatWindow from '../MobileComponents/MobileChatWindow/MobileChatWindow';
import MobileChatRequestList from '../MobileComponents/MobileChatRequestList/MobileChatRequestList'
import { SocketProvider } from '../Contexts/socketContext'

import Login from '../SharedComponents/Login/Login';
import ProtectedRoute from '../SharedComponents/ProtectedRoute/ProtectedRoute';

import './App.css';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  // run an api call to check if this person is authorized
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <div className="App" style={{maxHeight: '100vh'}}>
      <Router>
        <Switch>
          <Route path="/login">
            {
              isAuthorized ? <Redirect to='/chat' /> : <Login />
            }
          </Route>
            <SocketProvider>
              <ProtectedRoute path="/chat/:cid" >
                {
                  isDesktopOrLaptop ? <DesktopChatWindow /> : <MobileChatWindow />
                }
              </ProtectedRoute>
              <ProtectedRoute path="/chats">
                {
                  isDesktopOrLaptop ? <DesktopChatWindow /> : <MobileChatListWindow />
                }
              </ProtectedRoute>
              <ProtectedRoute path="/requests">
                {
                  <MobileChatRequestList /> 
                }
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
