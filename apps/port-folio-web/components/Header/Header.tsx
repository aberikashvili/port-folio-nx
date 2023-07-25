import Flex from '../Flex/Flex';

/* eslint-disable-next-line */
export type HeaderProps = {
  sticky?: boolean;
};

export const Header = ({ sticky = false }: HeaderProps) => {
  let headerStyles: { [key: string]: string } = {};

  if (sticky) {
    headerStyles = {
      ...headerStyles,
      ['position']: 'fixed',
      ['top']: '0',
    };
  }

  return (
    <Flex width="100%" items="stretch" additionalStyles={headerStyles}>
      <Flex width="100%" height="50px" gap="2rem">
        <Flex>
          <a href="/">HOME</a>
        </Flex>
        <Flex>
          <a href="/about">WHOAMI</a>
        </Flex>
        <Flex>
          <a href="/services">SERVICES</a>
        </Flex>
        <Flex>
          <a href="/portfolio">PORTFOLIO</a>
        </Flex>
        {/* <Flex>
          <a href="https://aberikashvili.github.io/" target="_blank">
            MY RESUME
          </a>
        </Flex> */}
        <Flex>
          <a href="/contact">CONTACT</a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
