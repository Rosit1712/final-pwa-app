/* eslint-disable no-empty */
const requestPermission = async () => {
  // meminta ijin memunculkan notification
  const result = await Notification.requestPermission();
  if (result === 'denied') {
    return;
  }

  if (result === 'default') {

  }
};

export default requestPermission;
