import Flex from './../../components/Flex/Flex';
import Header from './../../components/Header/Header';
import styles from './page.module.scss';

/* eslint-disable-next-line */
export type AboutProps = {};

export const About = (props: AboutProps) => {
  return (
    <>
      <Flex justify="space-between" items="stretch">
        <Header sticky={true} />
      </Flex>
      <Flex width="100%">I am Arkadi Berikashvili</Flex>
    </>
  );
};

export default About;
