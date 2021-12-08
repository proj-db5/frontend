export interface ChatDataProps {
  id: number;
  user: string;
  online: boolean;
  last_message: {
    id: number;
    context: string;
    time: string;
    state: boolean;
    is_rendezvous: boolean;
    rendezvous_place: number;
    rendezvous_time: number;
  };
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
