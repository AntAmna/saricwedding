import React from 'react';
import { Accordion } from '@mantine/core';

const items = [
  {
    key: 'q1',
    label: 'Da li je vjenčanje na otvorenom ili u zatvorenom?',
    children: 'Ceremonija će se održati ispred svadbenog salona "Ljubavna Priča", nakon čega ćemo slavlje nastaviti unutar salona. Ukoliko vremenske prilike ne budu dozvolile da se ceremonija održi vani, ista će se premjestiti u prostorije svadbenog salona.',
  },
  {
    key: 'q5',
    label: 'Da li ima dress code?',
    children: 'Dress code za naše vjenčanje je poluformalno ili elegantno-ležerno. To bi uključivalo haljine, košulje, sa ili bez sakoa, pantalone itd. Molimo bez patika, trenirki i farmerica.',
  },
  {
    key: 'q2',
    label: 'Da li ima obezbijeđen parking?',
    children: 'Svadbeni salon ima svoj parking. Ukoliko sva parking mjesta budu zauzeta, u blizini se nalazi veliki parking u sklopu Bingo City Centra, te parkinzi okolnih zgrada.',
  },
  {
    key: 'q3',
    label: 'Da li mogu povesti pratilju/pratioca?',
    children: 'Zbog velikog broja zvanica, nažalost ne možemo rezervisati dodatna mjesta. Na Vašim pozivnicama su naznačeni gosti za koje smo rezervisali mjesta, te Vas ljubazno molimo da sa sobom ne vodite osobe koje nisu pozvane.',
  },
  {
    key: 'q4',
    label: 'Da li mogu povesti djecu?',
    children: 'Iako obožavamo djecu, ljubazno molimo da na vjenčanju nema djece mlađe od 14 godina. Zaista bismo voljeli da možemo pozvati svu djecu naših gostiju na naše vjenčanje, ali možemo pozvati samo djecu uključenu u ceremoniju. Molimo Vas da ne dovodite svoju djecu, ako njihova imena nisu navedena na pozivnici.',
  },
]

const FAQ = () => (
  <Accordion py={25}>
    {items.map(({ key, label, children }) => (
      <Accordion.Item key={key} value={label}>
        <Accordion.Control>
          {label}
        </Accordion.Control>
        <Accordion.Panel>
          {children}
        </Accordion.Panel>
      </Accordion.Item>
    ))}
  </Accordion>
)

export default FAQ;
