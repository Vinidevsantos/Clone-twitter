import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
       
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Vinicius Santos</h1>
        <h2>@Vinidevsantos</h2>

        <p>
          Developer at <a href="https://www.rocketseat.com.br">@Rocketseat</a></p>

          <ul>
          <li>
              <LocationIcon />
              Rio Verde, GO, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 02 de agosto de 1991
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>99</strong>
            </span>
            <span>
              <strong>420 </strong> seguidores
            </span>
          </Followage>
      </ProfileData>
     
      <Feed />
 
    </Container>
  );
}

export default ProfilePage;