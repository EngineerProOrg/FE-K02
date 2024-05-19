import React, { useState } from "react"
import { Flex, Input, List } from 'antd'
import { useList } from './useList';

export const UseList = () => {
  const [list, { set, remove, push }] = useList([1, 2, 3, 4]);

  const [editRow, setEditRow] = useState(-1);
  const [inputtedValue, setInputtedValue] = useState('');
  const [addValue, setAddValue] = useState('');

  return <Flex justify="center">
    <List
      dataSource={list}
      style={{ margin: 100 }}
      renderItem={(item, index) => {
        const isEdit = editRow === index;

        const onEditRow = () => {
          setEditRow(index);
          setInputtedValue(item);
        }

        const onSaveRow = () => {
          set(index, inputtedValue)
          setEditRow(-1);
        }

        const onRemoveRow = () => {
          remove(index);
        }

        return <List.Item
          key={index}
          actions={[
            <a key="list-loadmore-edit" onClick={onRemoveRow}>Remove</a>,
            !isEdit && <a key="list-loadmore-edit" onClick={onEditRow}>Edit</a>,
            isEdit && <a key="list-loadmore-save" onClick={onSaveRow}>Save</a>
          ]}
        >
          {isEdit && <Input value={inputtedValue} onChange={e => setInputtedValue(e.target.value)} />}
          {!isEdit && <div style={{ width: 150 }}>{item}</div>}
        </List.Item>
      }}
    >
      <List.Item
        key={-1}
        actions={[
          <a
            key="list-loadmore-add"
            onClick={() => {
              push(addValue)
              setAddValue('');
            }}
          >Add</a>]}
      >
        <Input value={addValue} onChange={e => setAddValue(e.target.value)} />
      </List.Item>
    </List>
  </Flex>
}