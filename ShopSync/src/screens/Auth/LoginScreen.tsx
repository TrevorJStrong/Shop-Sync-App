import React from 'react';

import { SafeAreaView } from 'react-native';

import { useAuthStore } from '../../hooks/useStore';
import { supabase } from '../../utils/supabase';
import { flex_center } from '../../constants';
import LoginForm from '../../components/Forms/Login';
import { showToast } from '@/src/utils/showToast';

type formData = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const { login } = useAuthStore();

  async function signIn(data: formData) {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      showToast({
        message: error.message,
        type: 'error',
      });
    }
    if (session) {
      showToast({
        message: `Welcome ${session.user.user_metadata.first_name}`,
        type: 'success',
        position: 'bottom',
      });
      login(session.access_token);
    }
    setLoading(false);
  }

  return (
    <SafeAreaView style={flex_center}>
      <LoginForm loading={loading} submit={signIn} />
    </SafeAreaView>
  );
};
