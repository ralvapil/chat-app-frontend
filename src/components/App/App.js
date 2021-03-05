import {   
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { useMediaQuery } from "react-responsive";

import DesktopChatWindow from '../DesktopComponents/DesktopChatWindow/DesktopChatWindow'
import MobileChatListWindow from '../MobileComponents/MobileChatListWindow/MobileChatListWindow'
import MobileChatWindow from '../MobileComponents/MobileChatWindow/MobileChatWindow';

import './App.css';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  return (
    <div className="App" style={{maxHeight: '100vh'}}>
      <Router>
        <Switch>
          <Route path="/chat/:cid" >
            {
              isDesktopOrLaptop ? <DesktopChatWindow /> : <MobileChatWindow />
            }
          </Route>
          <Route path="/chat">
            {
              isDesktopOrLaptop ? <DesktopChatWindow /> : <MobileChatListWindow />
            }
          </Route>
          <Route path="*">
            <div> 404 Page Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
