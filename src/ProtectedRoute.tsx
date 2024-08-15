import { Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const ProtectedRoute = ({ isAuthenticated }: { isAuthenticated: () => boolean }) => {
  if (
    !isAuthenticated()

  ) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Layout />;
};

export default ProtectedRoute;
