import Flex from '../components/Flex/Flex';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from './page.module.scss';

export const Index = async () => {
  return (
    <>
      <Flex justify="space-between" items="stretch">
        <Header sticky={true} />
      </Flex>
      <Flex width="100%" height="800px">
        Companies I helped
        <br />
        DevFactory, Trilogy, Aurea, Valor Software, Simplifield,
        <br />
        MaxinAI, TRKR LLC, Mobilogy, Volt Delta, Concept Digital
      </Flex>
      <Footer />
    </>
  );
};

export default Index;
