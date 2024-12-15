import React from 'react';

import { Pressable, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

import CustomInput from '../Shared/Input';
import CustomButton from '../Shared/Button';
import { flex_center, margin } from '../../constants';
import Logo from '../Logo';
import { ViewComponent } from '../Shared/View';
import { TextComponent } from '../Shared/Text';
import { useNavigation } from '@react-navigation/native';

type formData = {
  email: string;
  password: string;
};

type Props = {
  submit: () => void;
  loading: boolean;
}

const LoginForm = ({ submit, loading }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigation = useNavigation();

  const onSubmit = (data: formData) => {
    submit(data);
  };

  return (
    <View style={flex_center}>
      <View style={{ marginBottom: margin.large }}>
        <Logo />
      </View>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Enter your email address..."
            keyboardType="email-address"
            onChangeText={value => onChange(value)}
            value={value}
            width="80%"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomInput
            placeholder="Enter your password..."
            secureTextEntry={true}
            onChangeText={value => onChange(value)}
            value={value}
            width="80%"
          />
        )}
      />

      <CustomButton
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
        mt={50}
        w={'80%'}
      />

      <ViewComponent mt={30}>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <TextComponent
            text="Dont have an account? Sign Up Here"
            align="center"
          />
        </Pressable>
      </ViewComponent>
    </View>
  );
};

export default LoginForm;
