export interface EmptyResponse {
  message: string;
  status: number;
}

export type UserResponse = EmptyResponse & {
  id: string;
  name: string;
  type: number;
}

export type ChatMessageData = {
  context: string
  time: string;
  sender_id: string;
  is_rendezvous: boolean;
}

export type ChatMessageResponse = EmptyResponse & {
  data: ChatMessageData[];
}
