import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const KEY = 'jobcoin-candied-hardwood';

interface Context {
  address: string | null;
  loading?: boolean;
  onSignIn(value: string): void;
  onSignOut(): void;
}
const AuthContext = React.createContext<Context>({
  address: null,
  loading: false,
  onSignIn: () => {},
  onSignOut: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [address, setAddress] = React.useState<string | null>(() => {
    return localStorage.getItem(KEY);
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (typeof address === 'string' && address.length > 0) {
      localStorage.setItem(KEY, address);

      navigate('/home', { replace: true });
    } else {
      localStorage.removeItem(KEY);
    }
  }, [address, navigate]);

  const handleSignIn = React.useCallback(
    (value: string) => {
      setLoading(true);
      return fakeAuth(value)
        .then((address) => {
          setAddress(address);
          navigate('/home');
        })
        .catch((e) => {
          console.error('error:', e);
        })
        .finally(() => setLoading(false));
    },
    [navigate]
  );

  const handleSignOut = React.useCallback(() => {
    setAddress(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        address,
        loading,
        onSignIn: handleSignIn,
        onSignOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return React.useContext(AuthContext);
}

function fakeAuth(value: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(value.trim()), 600);
  });
}
