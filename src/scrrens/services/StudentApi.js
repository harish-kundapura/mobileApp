import axios from 'axios'

const getUserData=async()=>{
    console.log("harishhhh")
    try{
        const res=await axios.get('https://thapatechnical.github.io/userapi/users.json')
        console.log("apiii",res)
        return res.json()

        
    }
    catch(err){
        console.log(err);
    }
    
}

export default getUserData