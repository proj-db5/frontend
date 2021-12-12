export interface ChatDataProps {
  id: number;
  context: string;
  name: string;
  online: 1 | null;
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
  online: 1 | null;
  isFriend?: 0 | 1;
}

export interface EmptyDataProps {
  message: string;
  status: number;
}
