import React, { FC } from 'react';
import { Button, Spin } from 'antd';

import { styled } from 'theme';

const SubmitSpinner = styled(Spin)`
  margin: 3px auto;
  position: absolute;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-btn {
    width: 100px;
    height: 30px;
  }
`;

type Props = {
  className?: string;
  isSubmitting: boolean;
  isDisabled: boolean;
  onSubmit: () => void;
};

const SubmitButton: FC<Props> = ({
  className,
  isSubmitting,
  isDisabled,
  onSubmit
}) => (
  <Container className={`${className || ''}`}>
    <Button
      type="primary"
      disabled={isDisabled || isSubmitting}
      onClick={onSubmit}
    >
      {isSubmitting ? '' : 'Submit'}
    </Button>
    {isSubmitting && <SubmitSpinner />}
  </Container>
);

export default SubmitButton;
