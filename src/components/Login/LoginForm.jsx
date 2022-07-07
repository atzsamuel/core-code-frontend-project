import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../apis/loginUser';
import "./loginForm.css";
import swal from 'sweetalert2';


const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const data = {
        email: values.email,
        password: values.password
      }
      const response = await loginUser(data);
      swal.fire({
        width: '500px',
        // height:'850px',
        position: 'top-end',
        icon: 'success',
        title: `Welcome! ${response.data[0].firstname} ${response.data[0].lastname}`,
        text: response.message,
        showConfirmButton: false,
        timer: 2500,
      });
      localStorage.setItem("userToken", response.data[0].user_token);
      localStorage.setItem("userId", response.data[0].user_id);
      localStorage.setItem("userName", `${response.data[0].firstname} ${response.data[0].lastname}`);
      form.resetFields();
      navigate('/dashboard', { replace: true });
    } catch (error) {
      swal.fire({
        width: '500px',
        position: 'top-end',
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong, contact support',
        showConfirmButton: false,
        timer: 2500,
      });
      console.log(error);
      navigate('/login', { replace: true });
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className='login-form-forgot' to="/dashboard">Forgot password</Link>
      </Form.Item>

      <Form.Item>
        <Button shape="round" block type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <Button shape="round" block type="secondary" htmlType="submit" className="login-form-button">
          <Link to="/#">Sign in with Google</Link>
        </Button>
      </Form.Item>
      <Form.Item>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;