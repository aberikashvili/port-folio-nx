import styles from './Flex.module.scss';

/* eslint-disable-next-line */
export type FlexProps = {
  dir?: 'column' | 'row';
  justify?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'normal'
    | 'revert'
    | 'right'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unset';
  items?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
  wrap?: 'wrap' | 'nowrap';
  gap?: string;
  width?: string;
  height?: string;
  additionalClasses?: string[];
  additionalStyles?: { [key: string]: string };
  debug?: boolean | string;
  children: any;
};

export const Flex = ({
  dir = 'column',
  justify = 'center',
  items = 'center',
  content = 'center',
  wrap = 'nowrap',
  gap = '1px',
  width,
  height,
  additionalClasses = [],
  additionalStyles = {},
  children,
  debug = false,
}: FlexProps) => {
  const classNames = [styles.flex];

  if (additionalClasses.length) {
    classNames.push(...additionalClasses);
  }

  return (
    <div
      className={classNames.join(' ')}
      style={{
        ['justify-content' as any]: justify,
        ['align-items' as any]: items,
        ['align-content' as any]: content,
        ['gap']: gap,
        ...(debug && {
          ['border' as any]: `1px solid ${
            typeof debug === 'boolean' ? 'red' : debug
          }`,
        }),
        ...(width && {
          width,
        }),
        ...(height && {
          height,
        }),
        ...additionalStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
