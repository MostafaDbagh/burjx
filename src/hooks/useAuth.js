import { useSelector, useDispatch } from 'react-redux';
import { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  logout, 
  clearError, 
  updateUser 
} from '../redux/reducer/authReducer';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, token, loading, error } = useSelector((state) => state.auth);

  const login = async (credentials) => {
    try {
      dispatch(loginStart());
      
      // Simulate API call - replace with actual API call
      // const response = await api.post('/auth/login', credentials);
      
      // Mock successful login for demo
      setTimeout(() => {
        dispatch(loginSuccess({
          user: {
            id: 1,
            name: credentials.email || 'User',
            email: credentials.email,
            avatar: null,
          },
          token: 'mock-jwt-token',
        }));
      }, 1000);
      
    } catch (err) {
      dispatch(loginFailure(err.message || 'Login failed'));
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  const clearAuthError = () => {
    dispatch(clearError());
  };

  const updateUserProfile = (userData) => {
    dispatch(updateUser(userData));
  };

  return {
    // State
    isAuthenticated,
    user,
    token,
    loading,
    error,
    
    // Actions
    login,
    logout: logoutUser,
    clearError: clearAuthError,
    updateUser: updateUserProfile,
  };
};
