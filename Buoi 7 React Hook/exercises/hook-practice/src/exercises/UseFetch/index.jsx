import { useFetch } from "./usefetch"
import { Alert } from "antd"
import { LoadingOutlined } from '@ant-design/icons'

const fetchFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      data: [
        'Johnson',
        'Daniel',
        'Max'
      ]
    }), 1000)
  })
}

export const UseFetch = () => {
  const { loading, data, error } = useFetch(fetchFn)

  if (error) {
    return <Alert>
      Fail to call API
    </Alert>
  }

  if (loading) {
    return <LoadingOutlined />
  }

  return <div>
    List:
    {
      data?.data?.map(item => {
        return <li key={item}>
          {item}
        </li>
      })
    }
  </div>
}