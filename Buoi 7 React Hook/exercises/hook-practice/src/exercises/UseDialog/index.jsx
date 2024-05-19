import { Button, Modal } from 'antd'
import { useDialog } from './useDialog';

window._globalStorage

export const UseDialog = () => {
  const [visible, { open, close }] = useDialog();

  return <>
    <Button onClick={open} >Click me</Button>
    <Modal open={visible} onCancel={close}>
      Hello world
    </Modal>
  </>
}