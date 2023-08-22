import { useSelector } from "react-redux";

const useValid = () => {
  const { employed, companyName } = useSelector((state) => state.form);

  if ((employed === "yes" && companyName.length > 0) || employed === "no") {
    return true;
  } else {
    return false;
  }
};

export default useValid;
