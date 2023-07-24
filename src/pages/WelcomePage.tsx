// import React from 'react'

export const WelcomePage = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center text-center px-[35px] md:px-[131px] xl:px-[450px]">
      <div>Logo</div>
      <div>
        <h1>Welcome to the app!</h1>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <button type="button">Registration</button>
        <button type="button">Sign In</button>
      </div>
    </div>
  );
};
