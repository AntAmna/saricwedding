import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Title, UnstyledButton } from '@mantine/core';

const Footer = () => {
  const navigate = useNavigate()

  return (
    <UnstyledButton my={52} mx="auto" w="fit-content" onClick={() => navigate('/saricwedding')}>
      <Title m={0} ta="center" order={1} lts={8} style={{ borderBottom: 'solid 1px black' }} pb={16} px={18}>A & A</Title>
      <Text m={0} ta="center" fz="md" lts={3} pt={16}>17.08.2024.</Text>
    </UnstyledButton>
  )
}

export default Footer;
