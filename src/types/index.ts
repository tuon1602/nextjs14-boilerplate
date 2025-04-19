export interface IUser {
  username: string;
  password: string;
}

type TaskStatus = 'active' | 'pending' | 'completed';

export interface ITask{
  id:string;
  text:string
  status: TaskStatus;
}

