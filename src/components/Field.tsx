import React from 'react';

export const Field = ({
  children,
  label,
  id,
  error,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="Field-wrapper">
      <label htmlFor={id}>{label}</label>
      {React.Children.only(children)
        ? React.Children.map(children, (c) => {
            if (React.isValidElement(c) && typeof c !== 'string') {
              return React.cloneElement(c, { id });
            }

            return c;
          })
        : children}
      {error && (
        <div role="alert" className="Field-error">
          {error}
        </div>
      )}
    </div>
  );
};
