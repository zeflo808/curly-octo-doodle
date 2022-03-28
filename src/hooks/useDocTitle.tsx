import * as React from 'react';

export function useDocTitle(title: string) {
  const defaultTitleRef = React.useRef(document.title);

  React.useEffect(() => {
    const defaultTitle = defaultTitleRef.current;
    document.title = title;
    return () => {
      // restore to original when unmounting
      document.title = defaultTitle;
    };
  }, [title]);
}
