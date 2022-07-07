import swal from "sweetalert2";

const messageAlert = (type, message) => {
  swal.fire({
    width: "500px",
    // height:'850px',
    position: "top-end",
    icon: type,
    title: type === "success" ? "Success" : "Error",
    text: message,
    showConfirmButton: false,
    timer: 2500,
  });
};

const formItemLayout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 14,
  },
};

export { messageAlert, formItemLayout };
