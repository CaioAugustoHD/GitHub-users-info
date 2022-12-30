import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme/default';

import { Profile } from './components/Profile';
import { Container } from './styles/Container';
import { api } from './lib/axios';
import { useEffect, useState } from 'react';

interface ApiResponse  {
  avatar_url: string,
  name: string,
  bio: string
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
        <Profile 
          avatar = {apiData.avatar_url}
          name = {apiData.name}
          bio = {apiData.bio}
          />
      </Container>
      
    </ThemeProvider>
  )
}
