import React, { FC } from 'react';
import { Button } from 'antd';
import { useTransition, animated } from 'react-spring';

import { styled } from 'theme';

const Container = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.error.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  > * {
    margin: 20px 0px;
  }
  z-index: 10;
`;

const Message = styled.h2`
  color: ${({ theme }) => theme.palette.error.contrastText};
`;

type Props = {
  className?: string;
  errorMessage: string;
  onDissmiss: () => void;
  isShown: boolean;
};

const ErrorOverlay: FC<Props> = ({
  className,
  errorMessage,
  onDissmiss,
  isShown
}) => {
  const transitions = useTransition(isShown, null, {
    from: { opacity: 0, transform: 'translate(0, 30px)' },
    enter: { opacity: 1, transform: 'translate(0, 0)' },
    leave: { opacity: 0, transform: 'translate(0, 30px)' }
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Container key={key} className={`${className || ''}`} style={props}>
              <Message>{errorMessage}</Message>
              <Button onClick={onDissmiss}>Okay</Button>
            </Container>
          )
      )}
    </>
  );
};

export default ErrorOverlay;
