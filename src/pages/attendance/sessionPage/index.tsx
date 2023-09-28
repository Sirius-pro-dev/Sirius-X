import React from 'react';
import BaseForm from '../../../components/form';
import { SessionFormContent, SessionInput, SessionButton } from './style';

const SessionPage = () => {
  return (
    <>
      <BaseForm>
        <SessionFormContent>
            <SessionInput type="text" placeholder='Введите код сессии' />
            <SessionButton>Подключиться</SessionButton>
        </SessionFormContent>
      </BaseForm>
    </>
  )
};

export default SessionPage;
