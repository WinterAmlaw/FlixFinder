import { Component, State, h } from '@stencil/core';
   
@Component({
  tag: 'custom-clock'
})
export class CustomClock {

  timer: number;

  @State() time: number = Date.now();
  @State() movies: any[] = []; 

  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);

    this.fetchMovies();
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  async fetchMovies() {
    try {
      const response = await fetch('http://localhost:3000/api/movies'); 
      if (response.ok) {
        const data = await response.json();
        this.movies = data; 
      } else {
        console.error('Failed to fetch movies:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  render() {
    const time = new Date(this.time).toLocaleTimeString();

    return (
      <div>
        <span>{time}</span>
        <stencil-route-link url="/profile/winter">
          <button>Profile page</button>
        </stencil-route-link>

        <h2>Movies</h2>
        <ul>
          {this.movies.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.title}</strong> ({movie.release_year})
              <p>Director: {movie.director}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

