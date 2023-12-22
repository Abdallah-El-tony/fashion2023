/* eslint-disable react-hooks/exhaustive-deps */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { ToastAction } from "../../store/slices/toastSlice";

function Toast() {
  // ** store
  const { toast_status, type , toast_name } = useSelector((state) => state.ToastReducer);
  const {hideToast } = ToastAction
  const dispatch = useDispatch()

  const showSuccessMessage = () => {
    toast.success(`${toast_name}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  };
  const ShowWarningMessage = () => {
    toast.warning(
      "If you want to add item to wishlist then you have to login first !",
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
      }
    );
  };
  const ShowErrorMessage = () => {
    toast.error(
      `${toast_name}`,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
      }
    );
  };

  useEffect(() => {
   if(toast_status) {
      if(type == 'success') {
         showSuccessMessage()
         dispatch(hideToast())
        }
      else if ( type == 'warning') {
        ShowWarningMessage()
        dispatch(hideToast())
      }
      else {
        ShowErrorMessage()
        dispatch(hideToast())
      }
   }
    
  }, [type, toast_status, showSuccessMessage, dispatch, hideToast]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Toast;
