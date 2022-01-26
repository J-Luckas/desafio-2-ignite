export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export interface selectedIdProps{
    selectedGenreId: number,
    setSelectedGenreId?: Function,
    selectedGenre?: GenreResponseProps,
    setSelectedGenre?: Function
}