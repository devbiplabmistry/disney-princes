import { Link } from 'react-router-dom';
import loginImg from '../../assets/login/signIn.png'
import {FcGoogle } from 'react-icons/fc';
const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-6">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='md:w-[600px] w-1/2'  src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div>
                                <h2 className='text-center font-lato font-black text-violet text-xl'>Please Login Here !!</h2>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-poppins font-medium text-base text-jade capitalize">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-poppins font-medium text-base text-jade capitalize">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-100 font-poppins font-medium text-base text-jade capitalize">Login</button>
                            </div>
                            <div className="divider">OR</div>
                           <h3 className='flex mx-auto items-center font-poppins text-jade'> <Link to="/google"><FcGoogle className='text-2xl mr-3'></FcGoogle></Link>Sign in with Google</h3>
                            <div>
                                <p className='font-poppins font-medium text-base justify-center text-jade  mt-2 capitalize'>are you new here ? <Link to="/register">please register !!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;