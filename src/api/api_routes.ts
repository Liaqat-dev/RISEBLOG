import axios from 'axios';

const post=axios.create({baseURL:'http://localhost:3000/api/post/',withCredentials:true});
// const auth=axios.create({baseURL:'http://localhost:3000/api/auth/',withCredentials:true});
const user=axios.create({baseURL:'http://localhost:3000/api/user/',withCredentials:true});

const SignIn = () => {
    window.location.href = 'http://localhost:3000/api/auth/google';
};
const SignOut = () => {
    window.location.href = 'http://localhost:3000/api/auth/logout';
}
const getPosts=async (pageNo: number, limit: number)=> {
    try {
        const {data} = await post.get(`/posts?pageNo=${pageNo}&limit=${limit}`);
        return data;

    } catch (e) {
        return {error: e}
    }
}


const fetchCurrentUser = async () => {
    try {
        const res = await user.get('/me'); // This should now go to http://localhost:5000/api/user/me
        if (res.status === 200) {
            console.log(res.data.user);
            return res.data.user;
        }

    } catch (error) {
        console.error('Error fetching user:', error);
    }
};
export {SignIn,SignOut,getPosts,fetchCurrentUser}