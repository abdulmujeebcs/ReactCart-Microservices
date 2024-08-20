import { UserPreferences } from '../models/userPreferences';
import { sendEmailNotification } from '../dispatchers/emailDispatcher';
import { sendSmsNotification } from '../dispatchers/smsDispatcher';

export const handleNotification = async (preferences: UserPreferences, message: string) => {
  switch (preferences.notificationType) {
    case 'email':
      await sendEmailNotification(preferences.userId, message);
      break;
    case 'sms':
      await sendSmsNotification(preferences.userId, message);
      break;
    default:
      throw new Error(`Unsupported notification type: ${preferences.notificationType}`);
  }
};
