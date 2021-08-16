import React,{useState,useEffect, useRef} from 'react';
import { Form, Input, InputNumber, Modal, Button } from 'antd';

// interface IProps{
//   handleSubmit: (values: any) => void;
//   visible: boolean;
//   handleCancel: () => void;
// }
const NewForm = props => {
  const { handleCancel, handleSubmit, visible } = props;
  const modalForm = useRef();
  const btn = useRef();
  const handleOk = () => {
    btn?.current?.click();
  };
  const Formsubmit = (e) => {
    e.preventDefault();
    modalForm.current?.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        handleSubmit(values);
      }
    });
  };
  return (
      <div>
      <Modal
      title="岗位要求"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} ref={modalForm} onSubmit={Formsubmit}
      >
        <Form.Item label="职位" >
          <Input/>
        </Form.Item>
        <Form.Item label="等级">
          <Input/>
        </Form.Item>
        <Form.Item label="学历">
          <Input/>
        </Form.Item>
        <Form.Item label="人数">
        <InputNumber/>
        </Form.Item>
        <Form.Item label="工作基本要求">
        <textarea></textarea>
        </Form.Item>
        <Form.Item label="资质及技能要求">
        <textarea></textarea>
        </Form.Item>
        <Form.Item label="备注">
        <textarea></textarea>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }} style={{display: 'none'}}>
          <Button type="primary" htmlType="submit"  ref={btn}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
      </div>
  );
};
export default Form.create()(NewForm);