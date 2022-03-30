/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';

interface IPayload {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  gender: string;
}

interface IProfile {
  profile: IUser;
  token: string;
  authenticated: boolean;
}

interface IAuthContext {
  profile: IProfile;
  failedTryLogin: boolean;
  loading: boolean;
  signIn({ email, password }: IPayload): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const KEY = '@ioasys:profile';
  const navigate = useNavigate();

  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const prevProfileRef = useRef<IProfile>(profile);

  useEffect(() => {
    prevProfileRef.current = profile;
  });

  const profilePreveiousValue = prevProfileRef.current ?? profile;

  useEffect(() => {
    if (profilePreveiousValue !== profile) {
      localStorage.setItem(KEY, JSON.stringify(profile));
    }
  }, [profile, profilePreveiousValue]);

  useEffect(() => {
    const profileStorage = localStorage.getItem(KEY);

    if (profileStorage) {
      setProfile(JSON.parse(profileStorage));
      navigate('/books');
    }

    setLoading(false);
  }, []);

  const signIn = async ({ email, password }: IPayload) => {
    setLoading(true);

    try {
      const response = await api.post('/auth/sign-in', {
        email,
        password,
      });

      const { data, headers } = response;

      setProfile({
        profile: data,
        token: headers.authorization,
        authenticated: true,
      });

      navigate('/books');
      setLoading(false);
    } catch (err: unknown) {
      setFailedTryLogin(true);
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem(KEY);
    setProfile({
      profile: {} as IUser,
      token: '',
      authenticated: false,
    });
  };

  const AuthContextProvider = {
    profile,
    failedTryLogin,
    loading,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={AuthContextProvider}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
