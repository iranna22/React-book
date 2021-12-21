import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';
import Login from '../components/Login';
//import Book from '../components/Book';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
        <Switch>
        <Route component={Login} path="/" exact={true} /> 
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>  
            <Switch> 
            {/* <Route component={Book} path="/Books"  exact={true}/> */}
              <Route component={BooksList} path="/BooksList" />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </BooksContext.Provider>
        </div>
     </div>
     </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
