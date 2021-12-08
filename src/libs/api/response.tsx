export interface EmptyResponse {
  message: string;
  status: number;
}

export type UserResponse = EmptyResponse & {
  id: string;
  name: string;
  type: number;
  place: number;
}

export type ChatMessageData = {
  context: string
  time: string;
  sender_id: string;
  is_rendezvous: boolean;
  expired_time?: string;
  rendezvous_place?: number;
  state: boolean;
}

export type ChatMessageResponse = EmptyResponse & {
  data: ChatMessageData[];
}
