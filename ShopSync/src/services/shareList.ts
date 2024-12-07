// share list via sms service
import { Share } from 'react-native';

export const shareList = async (listId: number) => {  
  const message = `Check out this shopping list: myapp://single-list/${listId}`;

  try {
    const result = await Share.share({
      message, // Message containing your custom URI scheme
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('Shared with activity type: ', result.activityType);
      } else {
        console.log('Shared successfully!');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Share dismissed');
    }
  } catch (error) {
    console.error('Error sharing: ', error.message);
  }
};
