import toast from "react-hot-toast";

const useSignup = () => {
  const signUp = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });


    if (!success) {
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Signup Successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { signUp };
};

export default useSignup;

const handleInputErrors = ({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password != confirmPassword) {
    toast.error("Password does not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password at least 6 character");
    return false;
  }

  return true;
};
