import React, { FC } from 'react';
import { PageHeader } from 'antd';

import { styled } from 'theme';

type StyledHeaderProps = {
  appBarType: AppBarType;
};

const ExtraText = styled.h4<StyledHeaderProps>`
  margin: 0px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-anchor: middle;
`;

export enum AppBarType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

const StyledHeader = styled(PageHeader)<StyledHeaderProps>`
  background-color: ${({ theme, appBarType }) =>
    theme.palette[appBarType].main};
  .ant-page-header-title-view-title {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
  .ant-page-header-title-view-extra {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px;
    height: 100%;
    top: 0px;
  }
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

type Props = {
  className?: string;
  title: string;
  appBarType?: AppBarType;
  extraText?: string;
};

const AppBar: FC<Props> = ({ className, title, appBarType, extraText }) => (
  <StyledHeader
    className={`${className || ''}`}
    title={title}
    appBarType={appBarType || AppBarType.PRIMARY}
    extra={
      <ExtraText appBarType={appBarType || AppBarType.PRIMARY}>
        {extraText}
      </ExtraText>
    }
  />
);

export default AppBar;
