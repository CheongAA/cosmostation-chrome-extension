import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import type { EthereumChain } from '~/types/chain';

import NativeChainCard, { NativeChainCardSkeleton } from '../components/ethereum/NativeChainCard';
import Header from '../components/Header';
import { Container, HeaderContainer, NativeChainCardContainer } from '../styled';

type EthereumProps = {
  chain: EthereumChain;
};

export default function Ethereum({ chain }: EthereumProps) {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <NativeChainCardContainer>
        <ErrorBoundary fallback={<NativeChainCardSkeleton chain={chain} />}>
          <Suspense fallback={<NativeChainCardSkeleton chain={chain} />}>
            <NativeChainCard chain={chain} />
          </Suspense>
        </ErrorBoundary>
      </NativeChainCardContainer>
      {/* <IbcTokenList /> */}
    </Container>
  );
}