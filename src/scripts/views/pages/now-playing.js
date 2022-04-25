import TheMovieDbSource from '../../data/themoviedb-source';
 
const NowPlaying = {
  async render() {
    return `
      <h2>Now Playing Page</h2>
    `;
  },
 
  async afterRender() {
    //fumgsi ini akan dipanggil setelah render
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log(movies);
 
    // TODO: tampilkan movies di dalam DOM
  },
};
 
export default NowPlaying;