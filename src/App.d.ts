interface Transaction {
  timestamp: string;
  fromAddress?: string;
  toAddress: string;
  amount: string;
}

interface TransactionsData {
  balance: string;
  transactions: Transaction[];
}
