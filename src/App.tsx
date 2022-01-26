import { useEffect, useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { GenreResponseProps } from './interfaces/SelectedIdProps';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId}  setSelectedGenreId={setSelectedGenreId} setSelectedGenre={setSelectedGenre} />
      <Content selectedGenreId={selectedGenreId}  selectedGenre={selectedGenre}/>
    </div>
  )
}