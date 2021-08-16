import React, {useState,useEffect} from 'react';
import { Form, Button, Row, Col,Table,Divider,Modal,Input, InputNumber } from 'antd';
// import { Page, CustomForm, } from '@/components';
import { basicForm } from './form';
import  NewForm  from './NewForm';

const BasicForm = props => {
  const { form } = props;
  console.log(' props.location.state.record: ',  props.location.state);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     key: '1',
  //     position: 'Web前端',
  //     level: '中级',
  //     education: '本科',
  //     number: '1-5',
  //     job: '3年',
  //     skills: 'React & vue',
  //     note: '有小程序开发经验优先',
  //   },
  //   {
  //     key: '2',
  //     position: 'Web前端',
  //     level: '中级',
  //     education: '本科',
  //     number: '1-5',
  //     job: '3年',
  //     skills: 'React & vue',
  //     note: '有小程序开发经验优先',
  //   }
  // ];
  const columns = [
    {
      title: '职位',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: '等级',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: '学历',
      dataIndex: 'education',
      key: 'education',
    },
    {
      title: '人数要求',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '工作基本要求',
      dataIndex: 'job',
      key: 'job',
    },
    {
      title: '资质及技能要求',
      dataIndex: 'skills',
      key: 'skills',
    },
    {
      title: '备注',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a onClick={() => edit(record)}>编辑</a>
          <Divider type="vertical" />
          <a onClick={()=>dele(record)}>删除</a>
        </span>
      ),
    },
  ];
  const handleSubmit = (values) => {
    setData([...data, values]);
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const handleAdd =()=>{ //添加岗位
    setVisible(true);
  };
  const edit=(record)=>{ //编辑
    console.log(record);
  };
  const dele=(record)=>{ //删除
    console.log(record);
  };
  const handleSave = () => {  // 发布
    form.validateFields((err, values) => {
      if (err) return;
      console.log(values);
      console.log(data);
    });
  };

  return (
    // <Page>
    //   <CustomForm form={form} formList={basicForm} >
    //     <div className='jobs' style={{margin:'0 20%'}}>
    //       <text style={{color:'rgba(0, 0, 0, 0.85)',marginLeft:'2.3%'}}>岗位要求：</text>
    //       <Button style={{float:'right'}} type="primary" icon="plus" onClick={handleAdd}>添加岗位</Button>
    //       <Table style={{padding:'20px 0'}} columns={columns} dataSource={data} pagination={false} bordered/>
    //       <NewForm visible={visible} handleCancel={handleCancel} handleSubmit={handleSubmit} />
    //     </div>
    //   </CustomForm>
    //   <Row>
    //     <Col span={10} offset={10}>
    //       <Button type="primary" onClick={handleSave}>
    //         发布
    //       </Button>
    //     </Col>
    //   </Row>
    <div>nav2</div>
    // </Page>
  );
};

export default Form.create()(BasicForm);
