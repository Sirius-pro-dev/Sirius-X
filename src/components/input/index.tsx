import React, { ChangeEventHandler } from 'react';
import {CustomInput, ButtonClearInput, InputContainer} from './styles';

interface propsInput {
  value: string,
  setValue: (e: any) => void
}

const Input = (props: propsInput) => {
  const {value, setValue} = props;


  const handleClearInput = () => {
    setValue('');
  }

  const hangleChangeInput = (e: any) => {
    if (e.target.value.length <= 30) {
      setValue(e.target.value);
    }
  }

  // DOTO после настройки webpack добавить svg лупы

  return (
    <InputContainer>
      <CustomInput type='text' placeholder='Поиск...' value={value} onChange={hangleChangeInput}  />
      <ButtonClearInput onClick={handleClearInput}></ButtonClearInput> 
    </InputContainer>
  );
};

export default Input;
