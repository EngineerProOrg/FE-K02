import { Layout, Menu } from "antd"
import { UseList } from "./exercises/UseList"
import React, { useState } from "react"
import { UseHover } from './exercises/UseHover'
import { UseDialog } from "./exercises/UseDialog";
import { UseFetch } from "./exercises/UseFetch";


const menus = [
  {
    label: 'useHover',
    key: 'useHover',
    content: UseHover
  },
  {
    label: 'useDialog',
    key: 'useDialog',
    content: UseDialog
  },
  {
    label: 'useFetch',
    key: 'useFetch',
    content: UseFetch
  },
  {
    label: 'useList',
    key: 'useList',
    content: UseList
  }
]

function App() {
  const [selectedHook, setSelectedHook] = useState('useHover')
  const SelectedComponent = menus.find(item => item.key === selectedHook).content;

  return (
    <Layout>
      <Layout.Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectedHook]}
          selectedKeys={[selectedHook]}
          style={{ height: '100%' }}
          items={menus}
          onClick={({ key }) => {
            setSelectedHook(key)
          }}
        />
      </Layout.Sider>
      <Layout.Content>
        <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>
          <SelectedComponent />
        </Layout.Content>
      </Layout.Content>
    </Layout>
  )
}

export default App
