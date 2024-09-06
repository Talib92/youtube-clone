import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ResultsList from './components/ResultList';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage />
      },
      {
        path: "/results",
        element: <ResultsList />,
      },
    ]
  }
]);

function App() {

  return (
    <Provider store = {store}>
    <>
        <Header/>
        {/* <Body/> */}
        <RouterProvider router={appRouter}/>
    </>
    </Provider>
  );
}

export default App;
