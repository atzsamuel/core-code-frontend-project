import {
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';
import { tailFormItemLayout, formItemLayout } from './defaultLayout';
import { registerUser } from '../../apis/loginUser';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';

const RegisterForm = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const data = {
        email: values.email,
        password: values.password,
        firstname: values.firstname,
        lastname: values.lastname,
        agreement: values.agreement
      }
      const response = await registerUser(data);
      console.log(response);
      swal.fire({
        width: '500px',
        // height:'850px',
        position: 'top-end',
        icon: 'success',
        title: `${response.data[0].firstname} ${response.data[0].lastname}`,
        text: response.message,
        showConfirmButton: false,
        timer: 2500,
      });
      form.resetFields();
      navigate('/login', { replace: true });
    } catch (error) {
      swal.fire({
        width: '500px',
        position: 'top-end',
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong',
        showConfirmButton: false,
        timer: 2500,
      });
      console.log(error);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="firstname"
        label="First Name"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid!',
          },
          {
            required: true,
            message: 'Please input your First Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Last Name"
        rules={[
          {
            type: 'text',
            message: 'The input is not valid!',
          },
          {
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <Link to="/">agreement</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <Form.Item  {...tailFormItemLayout}>
        You have already account <Link to="/login">Log in</Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;