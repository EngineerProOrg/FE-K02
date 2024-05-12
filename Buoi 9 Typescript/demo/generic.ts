const fetchUtil = (fetch) => {
  const data = {}
  const error = {}
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

const { data } = fetchUtil(fetchUser)