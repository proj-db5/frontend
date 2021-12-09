export interface ChatDataProps {
  id: number;
  context: string;
  name: string;
  online: boolean;
  room_id: number;
  time: string;
  type: number;
}

export interface UserDataProps {
  id: string;
  name: string;
  type: number;
  place: number;
  state_message?: string;
  online: boolean;
  isFriend?: 0 | 1;
}

export interface EmptyDataProps {
  message: string;
  status: number;
}
