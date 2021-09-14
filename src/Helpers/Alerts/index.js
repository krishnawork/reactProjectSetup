import React from "react";
import Swal from "sweetalert2";

export function Alert(icon, title, text) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text ? text : "",
    confirmButtonColor: "#fd7e14",
  });
}
