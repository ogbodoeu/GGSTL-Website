import SocialMediaButton from '~/components/social-media-button';
import { useState } from 'react';
import LoginForm from '~/components/login-form';
import SignupForm from '~/components/signup-form';

export default function Login() {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  return (
    <div className="bg-white min-h-dvh text-primary-gray flex justify-center items-center">
      <div className="flex justify-center py-20 md:py-0 items-center h-full md:gap-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex justify-center items-center flex-col">
            <img src="/GGSTL_LOGO.png" className="w-[300px] md:w-[400px]" />
            <div className="flex gap-4 text-xl md:text-xl font-bold items-center">
              <button
                className={`px-4 py-2 rounded-full transition-colors duration-700 ease-in-out cursor-pointer ${
                  authMode === 'login'
                    ? 'bg-primary-gray text-white shadow-lg'
                    : ' text-primary-gray'
                }`}
                onClick={() => setAuthMode('login')}
              >
                Log in
              </button>
              <div className="border-2 h-[50px]"></div>
              <button
                className={`px-4 py-2 rounded-full transition-colors duration-700 ease-in-out cursor-pointer ${
                  authMode === 'signup'
                    ? 'bg-primary-gray text-white shadow-lg'
                    : ' text-primary-gray'
                }`}
                onClick={() => setAuthMode('signup')}
              >
                Sign up
              </button>
            </div>
            {authMode === 'login' && <LoginForm />}
            {authMode === 'signup' && <SignupForm />}
            <div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="bg-white" />
                  <span>Remember me</span>
                </label>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Subscribe to newsletter</span>
                </label>
              </div>
            </div>
          </div>
          <div className="border-2 w-full h-1 md:h-130 md:w-1" />
          <div className="flex flex-col justify-center items-center">
            <SocialMediaButton text="Continue with Google">
              <img src="icons/google.png" height={40} width={40} alt="Google Logo" />
            </SocialMediaButton>
            <SocialMediaButton text="Continue with Facebook">
              <img src="icons/facebook.png" height={40} width={40} alt="Facebook Logo" />
            </SocialMediaButton>
            <SocialMediaButton text="Continue with Apple">
              <img src="icons/apple.png" height={40} width={40} alt="Apple Logo" />
            </SocialMediaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
