import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import img1 from './img/Fabi.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
        <Post
          nomeUsuario={'Fabricia'}
          fotoUsuario={img1}
          fotoPost={'https://picsum.photos/200/180'}
        />

         <Post
          nomeUsuario={'Jú'}
          fotoUsuario={'https://picsum.photos/50/80'}
          fotoPost={'https://picsum.photos/200/190'}
        />
      </MainContainer>
      
    );
  }
}

export default App;
