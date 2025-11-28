import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default (props: any) => {
  const modules = {
    toolbar: [
      [
        { header: '1' },
        { header: '2' },
        //  { font: [] }
      ],
      [
        {
          size: ['small', false, 'large', 'huge'],
        },
      ],
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };
  const formats = [
    'header',
    'size',
    // 'font',
    'bold',
    'align',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];
  const { value, onChange }: any = props;
  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder="请输入"
    />
  );
};

// import '@wangeditor/editor/dist/css/style.css';
// import { useState, useEffect } from 'react';
// import { Editor, Toolbar } from '@wangeditor/editor-for-react';
// import type { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
// import { message } from 'antd';
// import Config from '../../common/config';
// import { requestFile } from '@/utils/dva17';

// type InsertFnType = (url: string, alt: string, href: string) => void;

// export default (props: any) => {
//   const { value, onChange }: any = props;
//   const [editor, setEditor] = useState<IDomEditor | null>(null);
//   // 工具栏配置
//   const toolbarConfig: Partial<IToolbarConfig> = {
//     excludeKeys: ['group-video'],
//   };
//   // 编辑器配置
//   const editorConfig: Partial<IEditorConfig> = {
//     placeholder: '请输入内容...',
//     MENU_CONF: {
//       uploadImage: {
//         async customUpload(file: File, insertFn: InsertFnType) {
//           message.loading('图片上传中..', 0);
//           const url: any = await requestFile(Config.SERVER_HOME + 'user/file', file);
//           insertFn(url, url, url);
//           message.destroy();
//         },
//       },
//     },
//   };
//   // 及时销毁 editor ，重要！
//   useEffect(() => {
//     return () => {
//       if (editor == null) return;
//       editor.destroy();
//       setEditor(null);
//     };
//   }, [editor]);
//   return (
//     <div>
//       <Toolbar
//         editor={editor}
//         defaultConfig={toolbarConfig}
//         mode="default"
//         style={{ borderBottom: '1px solid #ccc' }}
//       />
//       <Editor
//         defaultConfig={editorConfig}
//         value={value}
//         onCreated={setEditor}
//         onChange={(currentEditor: any) => onChange(currentEditor.getHtml())}
//         mode="default"
//         style={{ height: '500px', overflowY: 'hidden' }}
//       />
//     </div>
//   );
// };
