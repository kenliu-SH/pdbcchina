import { Modal } from 'antd';
import IndexMenu from '@/components/IndexMenu';

export default (props: any) => {
  const { current, currentName } = props;
  return (
    <Modal {...props} width={1100} destroyOnClose>
      <IndexMenu currentStep={current} stepName={currentName} />
    </Modal>
  );
};
