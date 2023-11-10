/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import PhoneInput from "react-phone-input-2";
// ** styles
import "react-phone-input-2/lib/style.css";
import "../../style/regester.css";
import { useEffect, useState } from "react";

const PhoneNumberInput = ({ SetPhoneNumber, isSubmitted}) => {
  const [phone, setPhone] = useState("");
  const [error, setPhoneError] = useState(false);

  const changePhoneNumber = (e) => {
    SetPhoneNumber(e.slice(1));
    setPhone(e);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const checkPhoneNumber = () => {
    if (!phoneRegExp.test(phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      checkPhoneNumber()
    }
  }, [isSubmitted]);

  const onBlure = () => {
    checkPhoneNumber()
  };

  return (
    <>
      <PhoneInput
        country={"eg"} // Set the default country
        enableSearch // Enable search functionality
        countryCodeEditable={false} // Disable editing of the country code
        inputClass="form-input"
        onChange={(e) => changePhoneNumber(e)}
        onBlur={onBlure}
        value={phone}
      />
      {error ? <p className="text-danger">Please Enter Valid Number</p> : <></>}
    </>
  );
};

export default PhoneNumberInput;
