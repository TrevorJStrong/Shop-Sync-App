import React from 'react';

import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuthStore } from '../../hooks/useStore';
import { supabase } from '../../utils/supabase';
import { flex_center } from '../../constants';
import RegisterForm from '../../components/Forms/Register';
import BackButton from '../../components/Shared/BackButton';

type formData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const RegisterScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const { login } = useAuthStore();

  async function signUp(data: formData) {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
        },
      },
    });

    if (session) {
      console.log(session, 'logged in');
      login(session.access_token);
    }

    if (error?.code === 'weak_password') {
      Alert.alert('Password should contain number and special character');
    } else if (error?.code === 'user_already_exists') {
      Alert.alert('User already exists');
    }

    setLoading(false);
  }

  return (
    <SafeAreaView style={flex_center}>
      <BackButton />
      <RegisterForm loading={loading} submit={signUp} />
    </SafeAreaView>
  );
};
