import { useNavigate } from '~/Popup/hooks/useNavigate';
import BaseLayout from '~/Popup/pages/Account/Initialize/components/BaseLayout';

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  const { navigateBack } = useNavigate();

  return (
    <BaseLayout
      useHeader={{ onClick: () => navigateBack(), step: { total: 3, current: 3 } }}
      useTitle={{ title: 'Create Password', description: 'Enter a memorable password for your new account.' }}
    >
      {children}
    </BaseLayout>
  );
}