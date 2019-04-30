import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ColLayout = styled.div`
  display: flex;
  flex-direction: column;
`

const Alert = styled.div`
  background: palegoldenrod;
`

const Loading = styled.div`
  background: palegreen;
`

export function MusicTimeline() {
  const [musicList, setMusic] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  const [error, setError] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    const askAuthorization = async () => {
      try {
        const token = await axios.get(
          'https://accounts.spotify.com/authorize?client_id=8780acb7500c404993c099068f53f1c5&redirect_uri=http://localhost:8000/&scope=user-library-read&response_type=token'
          // {
          //   client_id: process.env.GATSBY_SPOTIFY_CLIENT_ID,
          //   redirect_uri: 'http://localhost:8000',
          //   scope: 'user-library-read',
          //   response_type: 'token',
          // }
        )
        console.log('token', token)
        setToken(token)
      } catch (error) {
        console.log('PUTAIN', error)
        setError(error)
      }
    }
    askAuthorization()
  }, [])

  // useEffect(() => {
  //   // const musicFetcher = async () => {
  //   //   setLoading(true)
  //   //   const config = {
  //   //     headers: {
  //   //       Accept: 'application/json',
  //   //       'Content-Type': 'application/json',
  //   //       Authorization: `Bearer${process.env.GATSBY_SPOTIFY_TOKEN}`,
  //   //     },
  //   //   }
  //   //   try {
  //   //     const result = await axios.get(
  //   //       `https://api.spotify.com/v1/me/tracks?market=ES&limit=10${!!offset &&
  //   //         '&offset=' + offset}`,
  //   //       config
  //   //     )
  //   //     setMusic(result.data)
  //   //   } catch (error) {
  //   //     console.log(error)
  //   //     setError(true)
  //   //   }
  //   // }
  //   // musicFetcher()
  // }, [offset])
  return (
    <ColLayout>
      <div>
        <h1>Music Timeline</h1>
      </div>
      {error && <Alert>Something went wrong</Alert>}
      {isLoading && <Loading>ca charge</Loading>}
      <div style={{ border: '1px solid blue' }}>music</div>
      <button onClick={() => setOffset(offset + 1)}>next</button>
    </ColLayout>
  )
}
