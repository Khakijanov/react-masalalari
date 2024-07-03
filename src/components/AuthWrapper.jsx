import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import '../style.css'// Animatsiyalar uchun CSS fayl

function AuthWrapper() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <SwitchTransition>
        <CSSTransition
          key={isLogin ? 'login' : 'register'}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
          classNames="fade"
        >
          {isLogin ? <LogIn /> : <Register />}
        </CSSTransition>
      </SwitchTransition>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Sign in'}
      </button>
    </div>
  );
}

export default AuthWrapper;
