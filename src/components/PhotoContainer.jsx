import { useEffect } from 'react';
import PhotoNotFound from './PhotoNotFound';
import { useParams } from 'react-router';

// eslint-disable-next-line react/prop-types
const PhotoContainer = ({ data, loading, query, changeQuery }) => {
  const { topic } = useParams()
  let images
  if (loading) {
    images = <h1>Loading...</h1>
    // eslint-disable-next-line react/prop-types
  } else if (data.length > 0) {
    // eslint-disable-next-line react/prop-types
    images = data.map(image => {
      let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_n.jpg`
      return (
        <li key={image.id}>
          <img src={url} alt='' />
        </li>
      )
    })
    // eslint-disable-next-line react/prop-types
  } else if (data.length === 0) {
    images = <PhotoNotFound />
  }
  useEffect(() => {
    if (topic) {
      changeQuery(topic)
    }
    // eslint-disable-next-line
  }, [topic]);

  return (
    <div className='photo-container'>
      <h2>
        {' '}
        <strong>Images of:</strong> {topic ? topic : query}
      </h2>
      <ul>{images}</ul>
    </div>
  )
}

export default PhotoContainer
