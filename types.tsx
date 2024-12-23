export type CountRecord = {
  id?: number;
  user_id: string;
  count_type: string;
  in_count: number;
  door_count: number;
  app_count: number;
  apo_count: number;
  created_at: string;
};
export type CountHistoryRecord = {
  id?: number;
  user_id: string;
  count_type: string;
  item_name: string;
  count_value: number;
  created_at: string;
};

export type CountState = {
  [key: string]: number;
};

export type LocalCountHistory = {
  [key: string]: Array<{
    value: number;
    timestamp: string;
    type: string;
  }>;
};
