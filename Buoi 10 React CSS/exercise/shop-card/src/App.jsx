
import { ItemCard } from './components';

const item = {
  thumbUrl: 'https://down-sg.img.susercontent.com/file/cn-11134207-7qukw-ljvmjmmof15pf6_tn',
  title: "24h Send Sneakers Men's Women's Air Force 1 Sports Double Wear-resistant Running Shoes Breathable Lelaki Wanita Perempuan Kasut Sukan Student AF1 Sports shoes",
  price: 20.49,
  currency: '$',
  soldItems: 31,
  discount: '53%'
}

function App() {

  return (
    <div style={{ width: 200 }}>
      <ItemCard item={item} />
    </div>
  )
}

export default App
