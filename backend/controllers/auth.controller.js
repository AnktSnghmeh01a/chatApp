import User from "../models/user.model.js";
import bycrpt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
// signup controller
export const signUp = async (req, res) => {
  try {
    const {
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
      profilePic,
    } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match" });
    }

    // find the user
    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    // hash password
    const salt = await bycrpt.genSalt(10);
    const hashPassword = await bycrpt.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      newUser.save();
      res.status(201).json({
        _id: newUser._id,
        userName: newUser.userName,
        fullName: newUser.fullName,
        gender: newUser.gender,
      });

    } 
    else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signUp controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// login controller
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });

    const isPasswordCorrect = await bycrpt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username and password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Sever error" });
  }
};

//  logout
export const logOut = async (req, res) => {
 
  try {
   
        res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"Logout successfully"});

  }
   catch (error) {
    
    console.log("Error in logout controller ",error.message);
    res.send(500).json({error:"Internal Sever error"}) 

  }


  
};
