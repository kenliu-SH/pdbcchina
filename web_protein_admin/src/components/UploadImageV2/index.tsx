import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './index.less';
import { Button, Modal, Row, Col, Image, Typography } from 'antd';

const UploadImage: React.FC = (props: any) => {
  const { style, whOpt, onCancel } = props;
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState('');
  const [cropper, setCropper] = useState<any>();
  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
    setOpen(true);
  };
  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  const onUpload = async () => {
    console.log('====>', cropData);
  };
  return (
    <div>
      <input className="btn" name="选择图片" accept="image/*" type="file" onChange={onChange} />
      <Modal
        open={open}
        title="图片裁切"
        width={800}
        okText="确认上传"
        onCancel={() => {
          setOpen(false);
        }}
        onOk={onUpload}
      >
        <div className="copper_contain">
          <Cropper
            style={{ height: 400, width: '100%' }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            guides={true}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              setCropper(instance);
            }}
          />
          {whOpt && <span>{whOpt}</span>}
          <Button type="primary" style={{ margin: '12px 0' }} onClick={getCropData}>
            确认裁切
          </Button>
          <Row gutter={12}>
            <Col span={12} className={'box'}>
              <Typography.Title level={4}>预览：</Typography.Title>
              <div
                className="img-preview"
                style={style ? style : { width: '100%', height: '300px' }}
              />
            </Col>
            <Col span={12} className={'box crop_confirm'}>
              <Typography.Title level={4}>裁切后客户端显示效果：</Typography.Title>
              <div className="confirm_img" style={style}>
                {cropData && (
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={cropData}
                  />
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};
export default UploadImage;
