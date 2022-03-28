import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useAuth } from './AuthProvider';
import { Box } from './Box';

import { format, parseISO } from 'date-fns';

export const Graph = ({
  loading,
  transactions = [],
}: {
  loading: boolean;
  transactions: any[];
}) => {
  const { address } = useAuth();
  let balance = 0;

  const formattedTransactions = transactions.map((t: any) => {
    const amount = parseFloat(t.amount);
    if (t.toAddress === address) {
      balance = balance + amount;
    }
    if (t.fromAddress === address) {
      balance = balance - amount;
    }

    return {
      ...t,
      // drop extra zeros
      amount: parseFloat(amount.toFixed(4)),
      balance: parseFloat(balance.toFixed(4)),
    };
  });

  return (
    <Box
      className="Graph-wrapper"
      heading="Jobcoin history graph"
      loading={loading}
      role="article"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={formattedTransactions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tickFormatter={() => ''} dataKey="timestamp" />
          <YAxis type="number" domain={['auto', 'auto']} />
          <Tooltip
            content={({ payload }) => {
              const data = payload && payload[0] && payload[0].payload;

              if (data) {
                return (
                  <Box className="Tooltip-content">
                    <div className="Tooltip-highlight">
                      <b>Balance: </b>
                      <b>{data.balance}</b>
                    </div>
                    <p>Transaction</p>
                    <div>
                      <b>Amount: </b>
                      <span>{data.amount}</span>
                    </div>
                    <div>
                      <b>Date: </b>
                      <span>{format(parseISO(data.timestamp), 'PPppp')}</span>
                    </div>
                    <div>
                      <b>To: </b>
                      <span>{data.toAddress}</span>
                    </div>
                    <div>
                      <b>From: </b>
                      <span>{data.fromAddress || 'GRANT'}</span>
                    </div>
                  </Box>
                );
              }

              return null;
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#4e4b74"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
