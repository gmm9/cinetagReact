import styles from './Section.module.css';
import Card from "components/Card";
import { useEffect, useState } from 'react';

export default function Section() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/gmm9/cinetag-api/videos`)
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(dados)
    })
  }, [])

  return (
    <section className={styles.container}>
    {videos.map((video) => {
     return <Card {...video} key={video.id} /> 
    })}
  </section>
  )
}
