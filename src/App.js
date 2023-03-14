import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

function App() {

  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const {data: {results}} = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
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

  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
      <Navbar.Brand href="/home">Trending</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
  <Navbar.Collapse id="nabarScroll">
    <Nav
    className="me-auto my-2 my-lg-3"
    style={{maxHeight: '100px'}}
    navbarScroll></Nav>

<Form className="d-flex">
  <FormControl
  type="search"
  placeholder="Movie Search"
  className="me-2"
  aria-lable="search"
  name=""></FormControl>
  <Button variant="secondary" type="submit">Search</Button>
</Form>
</Navbar.Collapse>
    </Container>
    </Navbar>
    <div className="App">
      <h1> Hello Youtube </h1>
      <div class="container w-400 bg-dark d-flex justify-content-center">
    <div className="grid">
        {renderMovies()}
      </div>
      </div>
      </div>
      </>
  );
}

export default App;
