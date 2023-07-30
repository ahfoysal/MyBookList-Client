import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { useSignupMutation } from '@/redux/features/user/userApi';

const SignupPage: React.FC = () => {
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  type ILogin = {
    userName: string;
    email: string;
    password: string;
  };
  const newUserMutation = useSignupMutation();
  const [newUser] = newUserMutation;
  const onSubmit = async (data) => {
    try {
      const result = await newUser(data);
      console.log(result);
      toast({
        variant: 'default',
        title: 'Signup Successful Please login.',
        action: <ToastAction altText="Login">Login</ToastAction>,
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-sm w-full bg-[#151F2E] rounded-lg p-8 py-12 shadow-md">
        <h2 className="text-2xl font-semibold mb-10 text-center text-neutral-400">
          Sign up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <div className="mb-4">
            <Controller
              name="userName"
              control={control}
              defaultValue=""
              rules={{ required: 'Username is required' }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Username"
                    className="w-full px-3 py-2 rounded-md  focus:outline-none focus:border-blue-500"
                  />
                  {errors.username && (
                    <p className="text-left text-red-500 text-sm mt-2">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="mb-4">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required' }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 bg-#151F2E rounded-md  focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && (
                    <p className="text-left text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="mb-4">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 rounded-md  focus:outline-none focus:border-blue-500"
                  />
                  {errors.password && (
                    <p className="text-left text-red-500 text-sm mt-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
