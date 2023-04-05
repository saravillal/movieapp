import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import TopTen from './components/TopTen';
/*let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=670ab1cd0ceaf592ba7be80c8098630f"*/


function App() {

  const API_URL = "https://api.themoviedb.org/3"
  /*const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=670ab1cd0ceaf592ba7be80c8098630f&query"*/
  const [movies, setMovies] = useState([])
  const [query, setQuery]=useState('')
  const [searchKey, setSearchKey] = useState ("")
  

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {data: {results}} = await axios.get(`${API_URL}/${type}/movie?api_key=670ab1cd0ceaf592ba7be80c8098630f&language=en-US&page=1&include_adult=false`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: searchKey
      }
    })
 
    setMovies(results)
  }

  useEffect (() => {
fetchMovies()
  }, [])

  const renderMovies = () => (
    movies.map(movie => (
      <MovieCard 
      key={movie.id}
      movie={movie}
      />
    ))
  )
  
const searchMovies = (e) => {
  e.preventDefault()
  fetchMovies(searchKey)
}

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
 
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
  <Navbar.Collapse id="navbarScroll">
    <Nav
    className="me-auto my-2 my-lg-3"
    style={{maxHeight: '100px'}}
    navbarScroll></Nav>

<Nav className="mr-auto">
          <Nav.Link href="/TopTen">Top10</Nav.Link>
          <Nav.Link href="/">Hola</Nav.Link>
        </Nav>

        <Form className="d-flex" onSubmit={searchMovies}>
  <FormControl
  type="search" onChangeCapture={(e) => setSearchKey(e.target.value)}
  placeholder="Movie Search"
  
  className="me-2"
  aria-label="search"
  name="query"
  value={query} onChange={changeHandler}></FormControl>
  <Button variant="secondary" type="submit">Search</Button>
</Form>
</Navbar.Collapse>
    </Container>
    </Navbar>

        <BrowserRouter>
        <div id="content">
          <Routes>
            <Route path="/TopTen" exact element={<TopTen/>}/>
          </Routes>
        </div>
      </BrowserRouter>
   




    <div className="App">
      <h1> Movies </h1>
      <div className="container">
    <div className="grid">
        {renderMovies()}
      </div>
      </div>
      </div>
      </>
  );
}
;
  


export default App;
