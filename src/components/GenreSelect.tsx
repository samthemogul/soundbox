
import '../styles/components/genres.css'



export const genres = [
    { title: 'Pop', value: 'POP' },
    { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
    { title: 'Dance', value: 'DANCE' },
    { title: 'Electronic', value: 'ELECTRONIC' },
    { title: 'Soul', value: 'SOUL_RNB' },
    { title: 'Alternative', value: 'ALTERNATIVE' },
    { title: 'Rock', value: 'ROCK' },
    { title: 'Latin', value: 'LATIN' },
    { title: 'Film', value: 'FILM_TV' },
    { title: 'Country', value: 'COUNTRY' },
    { title: 'Worldwide', value: 'WORLDWIDE' },
    { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
    { title: 'House', value: 'HOUSE' },
    { title: 'K-Pop', value: 'K_POP' },
  ];

  interface GenreProps {
    activeGenre: string;
    handleClick: (genre: string) => void;
  }

const GenreSelect = ({activeGenre, handleClick} : GenreProps) => {

    
  return (
    <div className='genre-container'>
        {genres.map((genre) => {
            return <button key={genre.title} className={activeGenre == genre.title ? "genre-button active" : "genre-button"} onClick={() => handleClick(genre.title)}>{genre.title}</button>
        })}
    </div>
  )
}

export default GenreSelect