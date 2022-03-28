import * as React from 'react';
import { useDocTitle } from '../hooks/useDocTitle';
import { useAuth } from '../components/AuthProvider';
import { Balance } from '../components/Balance';
import { Graph } from '../components/Graph';
import { Send } from '../components/Send';

export function Home() {
  const { address } = useAuth();
  const [[balance, transactions], setData] = React.useState<
    [string, Transaction[]]
  >(['', []]);
  const [loading, setLoading] = React.useState(true);

  useDocTitle('Home');

  const fetchData = React.useCallback((address: string) => {
    setLoading(true);

    return fetch(
      `https://jobcoin.gemini.com/candied-hardwood/api/addresses/${address}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data: TransactionsData) => {
        setData([data.balance, data.transactions]);
        return data;
      })
      .catch((e: any) => console.error('error:', e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    fetchData(address!);
  }, [address, fetchData]);

  const handleCoinSendSuccess = () => {
    return fetchData(address!);
  };

  return (
    <div className="Home-wrapper">
      <div className="Home-sidepanel">
        <Balance balance={balance} loading={loading} />
        <Send
          balance={balance}
          loading={loading}
          onSendSuccess={handleCoinSendSuccess}
        />
      </div>
      <Graph loading={loading} transactions={transactions} />
    </div>
  );
}
