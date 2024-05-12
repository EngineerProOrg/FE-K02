type UserType = {
  name: string
}

const fetchUser1 = (): Promise<UserType> => {
  return new Promise(resolve => {
    resolve({ name: 'Daniel' });
  })
}

const demo = async () => {
  const user = await fetchUser1();
}

