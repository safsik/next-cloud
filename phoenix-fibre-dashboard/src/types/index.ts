export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
};

export type Invoice = {
  id: string;
  userId: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
};

export type Device = {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive';
};

export type UsageData = {
  id: string;
  userId: string;
  dataUsed: number;
  date: string;
};

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};