
import '../styles/components/genres.css'



export const genres = [
  {"id": 0, "name": "All"},
  {"id": 132, "name": "Pop"},
  {"id": 116, "name": "Rap/Hip Hop"},
  {"id": 152, "name": "Rock"},
  {"id": 113, "name": "Dance"},
  {"id": 165, "name": "R&B"},
  {"id": 85, "name": "Alternative"},
  {"id": 106, "name": "Electro"},
  {"id": 466, "name": "Folk"},
  {"id": 144, "name": "Reggae"},
  {"id": 129, "name": "Jazz"},
  {"id": 98, "name": "Classical"},
  {"id": 173, "name": "Films/Games"},
  {"id": 464, "name": "Metal"},
  {"id": 169, "name": "Soul & Funk"},
  {"id": 2, "name": "African Music"},
  {"id": 16, "name": "Asian Music"},
  {"id": 153, "name": "Blues"},
  {"id": 75, "name": "Brazilian Music"},
  {"id": 81, "name": "Indian Music"},
  {"id": 95, "name": "Kids"}
]
interface Genre {
  id: number,
  name: string
}

  interface GenreProps {
    activeGenre: Genre | null;
    handleClick: (genre: Genre) => void;
  }

const GenreSelect = ({activeGenre, handleClick} : GenreProps) => {

    
  return (
    <div className='genre-container'>
        {genres.map((genre) => {
            return <button key={genre.id} className={activeGenre?.name == genre.name ? "genre-button active" : "genre-button"} onClick={() => handleClick(genre)}>{genre.name}</button>
        })}
    </div>
  )
}

export default GenreSelect