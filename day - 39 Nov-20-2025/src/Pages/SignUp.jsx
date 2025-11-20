import { useForm } from "react-hook-form";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const SignUp = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
        toast.success("Account created successfully!");
        setTimeout(() => {
            navigate("/signin");
        }, 2000);
        reset();
    }
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    });
    return (
        <div className="flex flex-col justify-center sm:h-screen p-4">
            <ToastContainer />
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                <div className="text-center mb-12">
                    <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-40 inline-block" />
                    </a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-6">
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
                            <input {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            })} type="text" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })} type="password" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
                            <input {...register("cpassword", {
                                required: "Confirm Password is required",
                                validate: value =>
                                    value === watch('password') || "Passwords do not match"
                            })} type="password" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
                            {errors.cpassword && <p className="text-red-600 text-sm mt-1">{errors.cpassword.message}</p>}
                        </div>
                    </div>
                    <div className="mt-12">
                        <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                            Create an account
                        </button>
                    </div>
                    <p className="text-slate-600 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" className="text-blue-600 font-medium hover:underline ml-1">Login here</a></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;