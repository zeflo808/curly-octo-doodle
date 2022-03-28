import * as React from 'react';
import { useAuth } from './AuthProvider';
import { Logo } from './Logo';

export function Navigation() {
  const { address, onSignOut } = useAuth();

  return (
    <header
      className="Navigation-header"
      hidden={!address}
      // Maintain the App scaffolding between public / private pages
    >
      <Logo title={address!} color="#f3f4f6" />
      <div className="Navigation-end">
        <svg
          aria-hidden="true"
          focusable="false"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          className="Navigation-user-icon"
        >
          <path
            clipRule="evenodd"
            d="M12 11.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M2.25 23.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span>Signed in</span>

        <nav
        // only set up using <nav> and <a> for semantic purposes.
        // In this example react-router + react handle the routing
        >
          <a
            onClick={(e) => {
              e.preventDefault();

              // PrivateRoute automatically navigates is address is null
              onSignOut();
            }}
            href="/welcome" // Some SR ignore
            className="Navigation-signout"
          >
            Sign Out
          </a>
        </nav>
      </div>
    </header>
  );
}
