import { useEffect, useState } from 'react';

import { getMovieVideos } from 'services/movies';

import './style.scss';

export function MovieVideos({ movieId }) {
  const [movieVideos, setMovieVideos] = useState({});

  useEffect(() => {
    const getVideos = async () => {
      const data = await getMovieVideos(movieId)

      setMovieVideos(data);
    }

    getVideos();

    return () => {
      setMovieVideos({})
    }
  }, [movieId])

  return (
    movieVideos.results?.length !== 0 && (
      <div id='movie-videos'>
        <h3>Videos</h3>
        <div className='videos-scroller'>
          {
            movieVideos.results?.map(video => {
              return (
                <div className='video-card' key={video.id}>
                  <iframe
                    className='video'
                    title={video.name}
                    src={video.site === 'YouTube' ? (
                      `https://www.youtube-nocookie.com/embed/${video.key}`
                    ) : (
                      `https://player.vimeo.com/video/${video.key}`
                    )}
                    frameBorder="0"
                    allowFullScreen
                    loading='lazy'
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    )
  );
}
