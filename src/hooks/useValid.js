import { useSelector } from "react-redux";

const useValid = () => {
  const { employed, companyName, fname, lname, email } = useSelector(
    (state) => state.form
  );

  const isNameValid = fname.length > 0 && lname.length > 0;
  const isEmailValid = email.length > 0;
  const isCompanyNameValid =
    employed === "no" || (employed === "yes" && companyName.length > 0);

  return isNameValid && isEmailValid && isCompanyNameValid;
};

export default useValid;
