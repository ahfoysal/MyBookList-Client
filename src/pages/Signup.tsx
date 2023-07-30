import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useSignupMutation } from '@/redux/features/auth/authApi';
import { ReloadIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';

const SignupPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [newUser, { data, error, isLoading, isError }] = useSignupMutation();
  if (isError) {
    const customId = 'custom-id-yes';

    toast.error((error as any)?.data.message, {
      position: 'bottom-left',
      toastId: customId,
    });
  }

  const onSubmit = async (userData) => {
    // try {
    await newUser(userData);

    console.log(error);

    console.log(data);
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
          {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button> */}
          <Button
            disabled={isLoading}
            className="w-full bg-blue-500  text-white"
            type="submit"
          >
            {isLoading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Signing Up
              </>
            ) : (
              <>Sign Up</>
            )}
          </Button>
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
