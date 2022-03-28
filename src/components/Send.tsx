import React from 'react';
import { Box } from './Box';
import { useForm } from 'react-hook-form';
import { Field } from './Field';
import { useAuth } from './AuthProvider';

interface FormFields {
  toAddress: string;
  amount: string;
}

export const Send = ({
  onSendSuccess,
  loading,
  balance,
}: {
  loading: boolean;
  balance: string;
  onSendSuccess(): void;
}) => {
  const [updating, setUpdating] = React.useState(false);
  const [updateError, setUpdateError] = React.useState(false);

  const { address } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<FormFields>();

  function sendCoin({ amount, toAddress }: FormFields) {
    if (updateError) setUpdateError(false);
    setUpdating(true);

    return fetch(
      'http://jobcoin.gemini.com/candied-hardwood/api/transactions',
      {
        method: 'POST',
        body: new URLSearchParams({
          amount: amount,
          fromAddress: address!,
          toAddress,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          resetForm();
          return onSendSuccess();
        }
        return Promise.reject(response);
      })
      .catch((e: any) => {
        console.error('error:', e);
        setUpdateError(true);
      })
      .finally(() => {
        setUpdating(false);
      });
  }

  return (
    <Box role="article" heading="Send Jobcoins">
      <form onSubmit={handleSubmit(sendCoin)}>
        <Field
          id="toAddress"
          label="Destination address *"
          error={errors?.toAddress?.message}
        >
          <input
            {...register('toAddress', {
              required: 'This field is required',
              validate: (val) => {
                if (val.trim() === address) {
                  return 'The destination address must be different than yours';
                }

                return undefined;
              },
            })}
          />
        </Field>
        <Field
          id="amount"
          label="Amount to send *"
          error={errors?.amount?.message}
        >
          <input
            {...register('amount', {
              required: 'This field is required',
              validate: (val) => {
                const amount = parseFloat(val);

                if (isNaN(amount) || (!isNaN(amount) && amount <= 0)) {
                  return 'The amount must be a valid number greater than 0';
                }
                let bal = parseFloat(balance);
                bal = isNaN(bal) ? 0 : bal;

                if (amount > bal) {
                  return 'The amount exceeds your current balance';
                }
                return undefined;
              },
            })}
          />
        </Field>
        <button
          className="Welcome-submit"
          type="submit"
          disabled={loading || updating}
        >
          {updating ? 'Sending Jobcoins...' : 'Send Jobcoins'}
        </button>
        {updateError && (
          <div role="alert" className="Field-error">
            We couldn't complete the transaction. Please retry.
          </div>
        )}
      </form>
    </Box>
  );
};
