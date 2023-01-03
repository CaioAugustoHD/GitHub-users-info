import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme/default';

import { Profile } from './components/Profile';
import { Container } from './styles/Container';
import { api } from './lib/axios';
import { useEffect, useState } from 'react';
import { Search } from './components/Search';
import { UserData } from './components/UserData';
import { Footer } from './components/Footer';

interface ApiResponse  {
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

  const [apiData, setApiData] = useState<ApiResponse>({} as ApiResponse)

  async function ApiFetch(userName: string) {
    
    try {

    const response = await api.get(`/${userName}`);
    const data = response.data as ApiResponse;
    setApiData(data);

    } catch(err) {
      console.log('Aconteceu um erro -> ' + err);
    }

  }

  useEffect(() => {
    ApiFetch('CaioAugustoHD')
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <Container>
        <Search/>
        <Profile 
          avatar = {apiData.avatar_url}
          name = {apiData.name}
          bio = {apiData.bio}
          />
          <UserData
            repos = {apiData.public_repos}
            location = {apiData.location}
            followers = {apiData.followers}
            following = {apiData.following}
          />
          <Footer
            url = {apiData.html_url}
          />
      </Container>
      
    </ThemeProvider>
  )
}
