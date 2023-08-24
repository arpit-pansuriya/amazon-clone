import React from "react";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
   
    <>
      <div
        className="py-5"
        style={{ background: "#ffd333", minHeight: "100vh" }}
      >
        <br />
        <br />
        <br />
        <br />

        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center">Forgot Password</h3>
          <p className="text-center">
            Enter your registered email to get reset password mail
          </p>
          <form action="">
            <CustomInput
              type="text"
              label="New Password"
              id="pass"
            ></CustomInput>
            <CustomInput
              type="text"
              label="New Password"
              id="confirmpass"
            ></CustomInput>
            <br />
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              Send Link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
