import { Box } from './Box';

export const Balance = ({ loading, balance }: any) => {
  return (
    <Box
      className="Balance-wrapper"
      heading="Jobcoin balance"
      loading={loading}
      role="article"
    >
      <div className="Balance-amount">{balance}</div>
    </Box>
  );
};
