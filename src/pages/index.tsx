import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/common/Container'
import { EventShelf } from 'src/components/events/EventShelf'
import { Text } from 'src/components/ui/Text'
import { eventFormatter } from 'src/services/formatters'
import { Event } from './event'

let events: Event[] = [
  {
    id: '1',
    title: 'Encerramento do Semestre Letivo 2022/2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta sem nec elementum cursus. Phasellus tempor diam ac elit auctor sollicitudin. Sed molestie nunc at magna vestibulum molestie. In odio nibh, dictum vitae euismod quis, tristique suscipit orci. Quisque malesuada id lacus quis eleifend. In hac habitasse platea dictumst. Nulla laoreet ornare nisl nec aliquam. Ut sed maximus mi, ut dapibus mauris. Nunc molestie vitae nisi quis bibendum. Nunc feugiat sem ac turpis ullamcorper, a venenatis velit semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae ex scelerisque, semper mi a, pulvinar ligula. In commodo vulputate augue eget vulputate. Nulla ultricies elit lobortis nunc feugiat, at suscipit leo bibendum. Aliquam imperdiet semper dignissim. Vivamus nec massa ex. Praesent et lectus tellus. Aliquam luctus fringilla ex, vel elementum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra id odio eleifend laoreet. Duis id risus sed nisl pretium blandit. Nam suscipit ipsum a condimentum pulvinar. Suspendisse aliquet pulvinar nulla, vitae euismod sapien ultricies at. Maecenas placerat condimentum luctus. Praesent eget fringilla augue, aliquam auctor urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam facilisis augue sed odio molestie pretium. Quisque et commodo nulla.',
    contactDetails: 'Telefone: 4002-8922',
    startDate: '2022-12-18T03:00:00.000Z',
    endDate: '2022-12-18T03:00:00.000Z',
    location:
      'Av. Águia de Haia, 2983 - Cidade Antônio Estêvão de Carvalho, São Paulo - SP, 03694-000',
    isInternal: false,
    isPublic: true,
    status: 'PENDING',
    createdAt: '2022-11-09T23:12:57.757-03:00',
    updatedAt: '2022-11-09T23:12:57.757-03:00',
    images: [
      {
        id: 1,
        src: 'https://www.fateczl.edu.br/imagens/fatec1.png',
        description: 'Prédio da Fatec ZL',
        eventId: '1'
      }
    ],
    relatedLinks: [
      {
        id: 1,
        url: 'https://www.fateczl.edu.br/',
        description: 'Site institucional',
        eventId: '1'
      }
    ]
  }
]

events = events.map((event) => eventFormatter(event))

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Eventos da Fatec ZL" />
      </Head>

      <Text as="h1" variant="heading-1">
        Musical festivals
      </Text>

      <EventShelf events={events} />
    </Container>
  )
}

export default Home
