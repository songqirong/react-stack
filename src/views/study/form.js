
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const handleChange =(e)=>{
  console.log('checkbox',e);
};

export const basicForm = [
  {
    name: 'name',
    label: '需求名称',
    type: 'input',
    layout,
    formItem: {
    //   placeholder: '给目标起个名字',
      // rules: [getTextRequire()],
    },
  },
  {
    name: 'department',
    label: '用人部门',
    type: 'input',
    layout,
    formItem: {
    //   placeholder: '给目标起个名字',
      // rules: [getTextRequire()],
    },
  },
  {
    name: 'dockingPeople',
    label: '对接人',
    type: 'input',
    layout,
    formItem: {
    //   placeholder: '给目标起个名字',
      // rules: [getTextRequire()],
    },
  },
  {
    name: 'describe',
    label: '需求描述',
    type: 'textarea',
    layout,
    formItem: {
    //   placeholder: '请输入你的阶段性工作目标',
      // rules: [getTextRequire()],
    },
  },
  {
    name: 'remarks',
    label: '备注',
    type: 'textarea',
    layout,
    formItem: {
    //   placeholder: '请输入你的阶段性工作目标',
      // rules: [getTextRequire()],
    },
  },
  {
    name: 'ServiceProvider',
    label: '接收服务商',
    type: 'select',
    // mode:"multiple",
    // onChange:{handleChange},
    layout,
    formItem: {
        showSearch: true,
        showArrow: false,
        // remoteUrl: '/api/dict/200001',
        // rules: [getTextRequire()],
    },
  },
  {
    name: 'contact',
    label: '接收联系人',
    type: 'mentions',
    layout,
    formItem: {
        // rules: [getTextRequire()],
      dict: [
        { text: 'afc163', value: 'afc163' },
        { text: 'zombiej', value: 'zombiej' },
        { text: 'yesmeck', value: 'yesmeck' },
      ],
    },
  },
  {
    name:'InformTheWay',
    label:'通知方式',
    type:'checkbox',
    onChange:{handleChange},
    layout,
    formItem:{
      dict:[
        {text:'邮箱',value:'1'},
        {text:'短信',value:'2'},
      ]
    }
  },
];
