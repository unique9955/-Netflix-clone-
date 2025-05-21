// Movie data - Normally this would come from an API
const movies = [
    {
        id: 1,
        title: "The Avengers",
        image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        rating: 8.0,
        year: 2012,
        genre: ["Action", "Adventure", "Sci-Fi"],
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
        id: 2,
        title: "Inception",
        image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        rating: 8.8,
        year: 2010,
        genre: ["Action", "Sci-Fi", "Thriller"],
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        id: 3,
        title: "The Dark Knight",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        rating: 9.0,
        year: 2008,
        genre: ["Action", "Crime", "Drama"],
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        id: 4,
        title: "Pulp Fiction",
        image: "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
        rating: 8.9,
        year: 1994,
        genre: ["Crime", "Drama"],
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        rating: 9.3,
        year: 1994,
        genre: ["Drama"],
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        id: 6,
        title: "Spider-Man: No Way Home",
        image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        rating: 8.3,
        year: 2021,
        genre: ["Action", "Adventure", "Fantasy"],
        description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
    },
    {
        id: 7,
        title: "Parasite",
        image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        rating: 8.6,
        year: 2019,
        genre: ["Comedy", "Drama", "Thriller"],
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    },
    {
        id: 8,
        title: "Joker",
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        rating: 8.4,
        year: 2019,
        genre: ["Crime", "Drama", "Thriller"],
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
    },
    {
        id: 9,
        title: "Interstellar",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: 8.6,
        year: 2014,
        genre: ["Adventure", "Drama", "Sci-Fi"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        id: 10,
        title: "The Matrix",
        image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        rating: 8.7,
        year: 1999,
        genre: ["Action", "Sci-Fi"],
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
        id: 11,
        title: "Dune",
        image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        rating: 8.1,
        year: 2021,
        genre: ["Adventure", "Sci-Fi"],
        description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy."
    },
    {
        id: 12,
        title: "The Godfather",
        image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        rating: 9.2,
        year: 1972,
        genre: ["Crime", "Drama"],
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    }
];

// DOM Elements
const featuredMoviesContainer = document.getElementById('featured-movies');
const popularMoviesContainer = document.getElementById('popular-movies');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Function to create movie card HTML
function createMovieCard(movie) {
    return `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="rating">
                    <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
                </div>
                <div class="year">${movie.year}</div>
            </div>
            <div class="play-btn">
                <i class="fas fa-play"></i>
            </div>
        </div>
    `;
}

// Display featured movies (first 6 movies)
function displayFeaturedMovies() {
    const featuredMovies = movies.slice(0, 6);
    featuredMoviesContainer.innerHTML = '';
    
    featuredMovies.forEach(movie => {
        featuredMoviesContainer.innerHTML += createMovieCard(movie);
    });
}

// Display popular movies (all movies)
function displayPopularMovies() {
    popularMoviesContainer.innerHTML = '';
    
    movies.forEach(movie => {
        popularMoviesContainer.innerHTML += createMovieCard(movie);
    });
}

// Search functionality
function searchMovies() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayPopularMovies();
        return;
    }
    
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) || 
        movie.genre.some(g => g.toLowerCase().includes(searchTerm))
    );
    
    popularMoviesContainer.innerHTML = '';
    
    if (filteredMovies.length === 0) {
        popularMoviesContainer.innerHTML = `<p>No movies found matching "${searchTerm}"</p>`;
        return;
    }
    
    filteredMovies.forEach(movie => {
        popularMoviesContainer.innerHTML += createMovieCard(movie);
    });
}

// Event listeners
searchBtn.addEventListener('click', searchMovies);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchMovies();
    }
});

// Open movie details when clicking on a movie card
document.addEventListener('click', (e) => {
    const movieCard = e.target.closest('.movie-card');
    if (movieCard) {
        const movieId = parseInt(movieCard.dataset.id);
        const selectedMovie = movies.find(movie => movie.id === movieId);
        showMovieDetails(selectedMovie);
    }
});

// Function to show movie details (modal)
function showMovieDetails(movie) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'movie-modal';
    
    // Modal content
    modal.innerHTML = `
        <div class="movie-modal-content">
            <span class="close-modal">&times;</span>
            <div class="movie-modal-info">
                <div class="movie-modal-poster">
                    <img src="${movie.image}" alt="${movie.title}">
                </div>
                <div class="movie-modal-details">
                    <h2>${movie.title} <span>(${movie.year})</span></h2>
                    <div class="movie-modal-rating">
                        <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
                    </div>
                    <div class="movie-modal-genre">
                        ${movie.genre.join(' | ')}
                    </div>
                    <div class="movie-modal-description">
                        ${movie.description}
                    </div>
                    <button class="btn-watch" onclick="watchMovie(${movie.id})">
                        <i class="fas fa-play"></i> Watch Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Close modal functionality
    const closeModal = modal.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });
}

// Function to redirect to the movie page
function watchMovie(movieId) {
    window.location.href = `movie.html?id=${movieId}`;
}

// Add modal styles to the document
function addModalStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .movie-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .movie-modal-content {
            background-color: #222234;
            border-radius: 8px;
            max-width: 900px;
            width: 100%;
            position: relative;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        
        .close-modal {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 28px;
            color: #fff;
            cursor: pointer;
            z-index: 10;
        }
        
        .movie-modal-info {
            display: flex;
            flex-wrap: wrap;
        }
        
        .movie-modal-poster {
            flex: 0 0 300px;
        }
        
        .movie-modal-poster img {
            width: 100%;
            height: 450px;
            object-fit: cover;
            border-radius: 8px 0 0 8px;
        }
        
        .movie-modal-details {
            flex: 1;
            padding: 30px;
        }
        
        .movie-modal-details h2 {
            margin-bottom: 15px;
            font-size: 2rem;
        }
        
        .movie-modal-details h2 span {
            font-weight: normal;
            opacity: 0.7;
        }
        
        .movie-modal-rating {
            color: #ffc107;
            font-size: 1.2rem;
            margin-bottom: 15px;
        }
        
        .movie-modal-genre {
            margin-bottom: 20px;
            color: #ddd;
        }
        
        .movie-modal-description {
            margin-bottom: 30px;
            line-height: 1.8;
        }
        
        @media screen and (max-width: 768px) {
            .movie-modal-info {
                flex-direction: column;
            }
            
            .movie-modal-poster img {
                border-radius: 8px 8px 0 0;
                height: auto;
            }
        }
    `;
    
    document.head.appendChild(styleSheet);
}

// Connect hero section watch now button to first movie
document.addEventListener('DOMContentLoaded', () => {
    const heroWatchBtn = document.querySelector('.hero .btn-watch');
    if (heroWatchBtn) {
        heroWatchBtn.addEventListener('click', () => {
            watchMovie(1); // Redirect to the first movie (The Avengers)
        });
    }
});

// Initialize the page
window.addEventListener('load', () => {
    displayFeaturedMovies();
    displayPopularMovies();
    addModalStyles();
}); 