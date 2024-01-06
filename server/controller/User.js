const User =require("../models/userModel.js");

 const create= async(req,res)=>{
  // res.send('POST request received');
   
    try{
        
      const userData=new User(req.body);


       if(!userData)
       {
        return res.status(404).json({
          sucess:true,
          msg:"User Data not found",
        });
       }
       const savedData= await userData.save();
        res.status(200).json(savedData);

    }catch(error){
      res.status(500).json({error:error});
    }
}

 const  getalluserdata= async(req,res)=>{
      console.log(req.body); 
  try{
       const userData = await User.find();

       if(!userData){
         return res.status(404).json({mas:"Users data not found"});
       }
       res.status(200).json(userData); 

  }catch(error){
    res.status(500).json({error:error});
  }

  
}

const getoneuser= async(req,res)=>{
    try{
    console.log(req.body);
    const id=req.params.id;
    const userExist= await User.findById(id);
     if(!userExist){
           return res.status(404).json({msg:"User Not found"});
      }
      res.status(200).json(userExist);

    }catch{
      res.status(500).json({error:error});
    }
}

const updateuser =async(req,res)=>{
   try{
        console.log(req.body);
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
          return res.status(401).json({msg:"User not found"});
        } 
        
        const updateDate= await User.findByIdAndUpdate(id,req.body,{new:true});
           res.status(200).json({mag:"User Update Successfully"})

   }catch(error){
      res.status(500).json({error:error});
   }
} 

const userdelete =async(req,res)=>{
    console.log(req.body);
   try{
       const id=req.params.id;
       const userExist=await User.findById(id);

       if(!userExist){
        return res.status(400).json({mag:"User Not Exist"})
       }

       await User.findByIdAndDelete(id);
      res.status(200).json({mag:"User Deleted Successfully"});
       

   }
   catch(error){
    res.status(500).json({error:error});

   }
}

module.exports={
    create,
    getalluserdata,
    getoneuser,
    updateuser,
    userdelete,
}