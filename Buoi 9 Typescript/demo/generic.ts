

const fetchUtil = <ResponseType, ErrorType = ResponseType>(fetch): {
  data: ResponseType | null;
  refetch: () => void;
  error: ErrorType | null;
  loading: boolean;
} => {
  const data = null;
  const error = null
  const loading = false;

  const refetch = () => {
    fetch()
  }

  return {
    data,
    refetch,
    error,
    loading
  }
}

const fetchUser = () => {
  return Promise.resolve(() => ({
    user: 'daniel',
    gender: 'male'
  }))
}

type UserType = {
  user: string;
  gender: string
}

const { data } = fetchUtil<UserType1>(fetchUser)