// Sample movie data
const movies = [
    {
        id: 1,
        title: 'Inception',
        genre: 'Sci-Fi',
        releaseDate: '2010-07-16',
        poster: 'path/to/inception.jpg',
        synopsis: 'A thief who steals corporate secrets through use of dream-sharing technology...',
        cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
        trailer: 'path/to/inception-trailer.mp4'
    },
    {
        id: 2,
        title: 'The Dark Knight',
        genre: 'Action',
        releaseDate: '2008-07-18',
        poster: 'path/to/dark-knight.jpg',
        synopsis: 'When the menace known as The Joker emerges from his mysterious past...',
        cast: 'Christian Bale, Heath Ledger, Aaron Eckhart',
        trailer: 'path/to/dark-knight-trailer.mp4'
    },
    // Add more movie objects here
];

// Function to display movies
function displayMovies(movieList) {
    const movieListContainer = document.querySelector('.movie-list');
    movieListContainer.innerHTML = '';
    movieList.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.genre} | ${movie.releaseDate}</p>
        `;
        movieItem.addEventListener('click', () => {
            window.location.href = `movie-details.html?id=${movie.id}`;
        });
        movieListContainer.appendChild(movieItem);
    });
}

// Function to search movies
function searchMovies(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.genre.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

// Initialize movie list and search functionality
document.addEventListener('DOMContentLoaded', () => {
    displayMovies(movies);
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', searchMovies);
});
