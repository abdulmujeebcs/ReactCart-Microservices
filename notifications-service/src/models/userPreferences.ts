type NotificationType = 'email' | 'sms';

export interface UserPreferences {
  userId: string;
  notificationType: NotificationType;
}
