import { styled } from '@mui/material/styles';

export const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.colors.base02,
  border: `0.1rem solid ${theme.colors.base02}`,

  padding: '1.2rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  borderRadius: '0.8rem',

  // cursor: 'pointer',

  // '&:hover': {
  //   border: `0.1rem solid ${theme.colors.base04}`,
  // },
}));

export const LeftContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  textAlign: 'left',
});

export const LeftImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& > img': {
    width: '2.4rem',
    height: '2.4rem',
  },
});

export const LeftTextContainer = styled('div')({
  paddingLeft: '0.8rem',

  display: 'grid',

  gridTemplateColumns: '1fr',

  rowGap: '0.3rem',
});

export const LeftTextChainContainer = styled('div')(({ theme }) => ({
  color: theme.colors.text01,
}));

export const LeftTextChainAmountContainer = styled('div')(({ theme }) => ({
  color: theme.colors.text02,
}));

export const RightContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',

  textAlign: 'right',
});

export const RightTextContainer = styled('div')({
  display: 'grid',

  gridTemplateColumns: '1fr',

  rowGap: '0.3rem',
});

export const RightTextValueContainer = styled('div')(({ theme }) => ({
  color: theme.colors.text01,
}));

export const RightTextChangeRateContainer = styled('div')(({ theme }) => ({
  color: theme.colors.text02,
}));