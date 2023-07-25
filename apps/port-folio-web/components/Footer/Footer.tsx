import Flex from '../Flex/Flex';
import styles from './Footer.module.scss';

/* eslint-disable-next-line */
export type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <Flex width="100%" height="300px" justify="flex-start" items="flex-start">
      <Flex width="300px" debug={true}>
        1
      </Flex>
      <Flex width="100%" debug={true}>
        2
      </Flex>
    </Flex>
  );
};

export default Footer;
