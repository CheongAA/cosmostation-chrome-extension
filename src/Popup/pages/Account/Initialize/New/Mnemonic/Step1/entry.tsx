import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { joiResolver } from '@hookform/resolvers/joi';

import Button from '~/Popup/components/common/Button';
import { useNavigate } from '~/Popup/hooks/useNavigate';
import { newAccountState } from '~/Popup/recoils/newAccount';

import { BottomContainer, Container, StyledInput } from './styled';
import type { Step1Form } from './useSchema';
import { useSchema } from './useSchema';

export default function Entry() {
  const { navigate } = useNavigate();

  const { step1Form } = useSchema();

  const [newAccount, setNewAccount] = useRecoilState(newAccountState);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Step1Form>({
    resolver: joiResolver(step1Form),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: { name: newAccount.accountName },
  });

  const submit = (data: Step1Form) => {
    setNewAccount((prev) => ({ ...prev, accountName: data.name }));
    reset();
    navigate('/account/initialize/new/mnemonic/step2');
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Container>
        <StyledInput placeholder="account name" inputProps={register('name')} error={!!errors.name} helperText={errors.name?.message} />
        <BottomContainer>
          <Button type="submit" disabled={!isDirty && !newAccount.accountName}>
            Next
          </Button>
        </BottomContainer>
      </Container>
    </form>
  );
}