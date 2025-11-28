import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile } from 'antd/es/upload/interface';
import Config from '@/common/config';

export default (props: any) => {
  const { fileList, onChange, maxCount, aspect } = props;
  const onPreview = async (file: UploadFile) => {
    let src = file.response as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop
      rotate
      modalTitle={'图片裁切'}
      aspect={aspect ? aspect : 320 / 128}
      grid={true}
      quality={1}
      modalOk="确定"
      modalCancel="取消"
    >
      <Upload
        action={Config.SERVER_HOME + 'user/file'}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList?.length < maxCount && '+ 上传图片'}
      </Upload>
    </ImgCrop>
  );
};
