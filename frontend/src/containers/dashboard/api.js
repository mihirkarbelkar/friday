import api from 'app/api';

export async function fetchEventList() {
  const url = '/event_list/';
  const apiArgs = {
    API_CALL: {
      method: 'GET'
    },
    url,
    TYPES: {
      successType: 'DASHBOARD:EVENT_LIST:FETCH:SUCCESS',
      failureType: 'DASHBOARD:EVENT_LIST:FETCH:FAILURE'
    },
    id: 'get-event-list'
  };
  const response = await api(apiArgs);

  if (response.status === 200) {
    // make something
  }
}
