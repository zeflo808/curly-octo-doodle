import React from 'react';
import clsx from 'clsx';

export function Box({
  children,
  className,
  loading,
  heading,
  ...rest
}: React.PropsWithChildren<
  React.ComponentProps<'div'> & { heading?: string; loading?: boolean }
>) {
  return (
    <div {...rest} className={clsx('Box-wrapper', className)}>
      {heading && (
        <div className="Box-header">
          <h2>{heading}</h2>
        </div>
      )}

      {loading ? (
        <div className="Box-loading-wrapper">
          <div className="Box-loading-el" />
        </div>
      ) : (
        <div className="Box-children">{children}</div>
      )}
    </div>
  );
}
