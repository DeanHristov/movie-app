import { requestState } from '@constants/initialAppState'


export default (state = requestState, action) => {
  const { type } = action;

    if(type.lastIndexOf('REQUEST') > -1) {
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      }
    }

    if(type.lastIndexOf('FAILURE') > -1) {
      const { status_code, status_message} = action.payload;

      return {
        ...state,
        isFetching: false,
        isFetched: true,
        status: {
          type: 'error',
          statusCode: status_code,
          message: status_message
        },
        lastUpdated: (new Date()).getTime()
      }
    }

    if(type.lastIndexOf('SUCCESS') > -1) {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        status: {
          type: 'success'
        },
        lastUpdated: (new Date()).getTime()
      }
    }


  return state;
}
