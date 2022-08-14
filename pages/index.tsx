import type { NextPage } from 'next';
import Head from 'next/head';
import { StyledApp } from '../styles/App.styled';
import Todo from '../components/Todo';



const Home: NextPage = () => {
  return (
    <StyledApp>
      <Head>
        <title>Todo List Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Todo />
    </StyledApp>
  )
}

export default Home;
