import DataGenerator from '../utils/dataGenerator';

import Header from '../components/Header';

import Content from '../components/Content';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <DataGenerator />
      <Header />
      <Content />
    </>
  );
}
