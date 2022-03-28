import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDocTitle } from '../hooks/useDocTitle';
import { useAuth } from '../components/AuthProvider';
import { Box } from '../components/Box';
import { Field } from '../components/Field';
import { Logo } from '../components/Logo';

export function Welcome() {
  const { onSignIn, loading } = useAuth();

  useDocTitle('Welcome');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ address: string }>();

  return (
    <div className="Welcome-wrapper">
      <div>
        <Logo title="Welcome to Jobcoin" hideTitle size={200} color="#f3f4f6" />
        <Box
          role="article"
          className="Welcome-box"
          heading="Welcome! Sign in with your JobCoin address"
        >
          <form
            onSubmit={handleSubmit((data) => {
              onSignIn(data.address.trim());
            })}
          >
            <Field
              id="address"
              label="Jobcoin address *"
              error={errors?.address?.message}
            >
              <input
                {...register('address', {
                  required: 'This field is required',
                })}
              />
            </Field>

            <button type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </Box>
      </div>
    </div>
  );
}
