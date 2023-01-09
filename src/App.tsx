import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme/default';

import { Profile } from './components/Profile';
import { Container } from './styles/Container';
import { api } from './lib/axios';
import { useState } from 'react';
import { Search } from './components/Search';
import { UserData } from './components/UserData';
import { Footer } from './components/Footer';

interface ApiResponse  {
  login: string,
  avatar_url: string,
  name: string,
  bio: string,
  public_repos: number,
  location: string,
  followers: number,
  following: number,
  html_url: string
}

export function App() {

  const [user, setUser] = useState('');

  function searchUser() {

    if(user.length != 0){
      ApiFetch(user);
    } else {
      alert('digite um usuario')
    }    
  }

  const [apiData, setApiData] = useState<ApiResponse>({name: 'Pesquise um usuário'} as ApiResponse)

  const [visibleContainers, setVisibleContainers] = useState(false)

  async function ApiFetch(userName: string) {
    try {

    const response = await api.get(`/${userName}`);
    const data = response.data as ApiResponse;
    setApiData(data)
    setVisibleContainers(true)

    } catch(err) {

      console.log('Aconteceu um erro -> ' + err);
      setVisibleContainers(false)
      setApiData({
        name: 'Usuário não encontrado',
        bio: 'Verifique se o nome do usuário foi digitado corretamente',
        login: '',
        avatar_url: '',
        public_repos: 0,
        location: '',
        followers: 0,
        following: 0,
        html_url: ''
      })
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <Container>
        <Search 
          user={user} 
          setUser={setUser}
          searchUser={searchUser}
          />
        <Profile 
          avatar = {apiData.avatar_url}
          name = {apiData.name}
          bio = {apiData.bio}
          />
          { visibleContainers && 
            <UserData
              repos = {apiData.public_repos}
              location = {apiData.location ? apiData.location : '--'}
              followers = {apiData.followers}
              following = {apiData.following}/> }
          { visibleContainers &&
            <Footer
              url = {apiData.html_url}
            /> }
      </Container>
      
    </ThemeProvider>
  )
}
