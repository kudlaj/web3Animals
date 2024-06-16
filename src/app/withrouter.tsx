import { useRouter } from 'next/router';
import React from 'react';

interface WithRouterProps {
  children: React.ReactNode;
  router: any; // Specify a more precise type if possible
}

const withRouter = <T extends WithRouterProps>(Component: React.ComponentType<T>) => {
  const WithRouter = (props: T) => {
    const router = useRouter();
    return <Component {...props} router={router} />;
  };

  WithRouter.displayName = `WithRouter(${Component.displayName || Component.name || 'Component'})`;
  return WithRouter;
};

export default withRouter;