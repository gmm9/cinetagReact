
import React, { useEffect, useState } from 'react'
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import NaoEncontrada from 'pages/NaoEncontrada';


export default function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
      fetch(`https://my-json-server.typicode.com/gmm9/cinetag-api/videos?id=${parametros.id}`)
      .then(resposta => resposta.json()).then(dados => {
        setVideo(...dados)
      })
    }, [parametros.id])

    if (!video) {
        return <NaoEncontrada />
    }

  return (
    <>
        <Banner imagem="player" />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
        <iframe width="560"
         height="315" 
         src={video.link} 
         title={video.titulo} 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
          </iframe>
          </section>
    </>
  )
}
