import LibrarySong from "./librarySong";

const Library = ({
  setSongs,
  audioRef,
  songs,
  song,
  setCurrentSong,
  isPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          songs={songs}
          song={song}
          setCurrentSong={setCurrentSong}
          key={song.id}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
          id={song.id}
        />
      ))}
    </div>
  );
};

export default Library;
