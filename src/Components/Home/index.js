import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { LoaderUpdate } from "Redux/Actions/auth.action";
import { toast } from "react-toastify";
import { Alert } from "Helpers/Alerts";
import * as handler from "../../Helpers/Api/handler";
function Home() {
  const dispatch = useDispatch();
  const success = () => toast.success("success");
  const error = () => toast.error("error");
  const warning = () => toast.warning("warning");
  const successalert = () => {
    Alert("success", "success", "Alert Success");
  };

  const Getmethod = () => {
    // handler
    //   .get("holiday/GetAllHoliday")
    //   .then((result) => {
    //     console.log("result", result);
    //   })
    //   .catch((eror) => {
    //     console.log(error, eror);
    //   });
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          dispatch(LoaderUpdate(true));
          setTimeout(() => {
            dispatch(LoaderUpdate(false));
          }, 1000);
        }}
      >
        Spinner
      </Button>
      {/*  */}
      <Button onClick={success} variant="outlined">
        Success
      </Button>
      <Button onClick={error} variant="outlined" color="secondary">
        Danger
      </Button>
      <Button onClick={warning} variant="outlined">
        Warning
      </Button>
      {/*  */}
      <Button onClick={successalert} variant="outlined" color="secondary">
        Success Alert
      </Button>
      {/*  */}
      <Button onClick={Getmethod} variant="outlined">
        Api Call get
      </Button>
    </div>
  );
}

export default Home;
