import { Outlet, useModel } from '@umijs/max';
import { useEffect,  } from 'react';

export default function Layout() {
  const { setInitialState } = useModel('@@initialState');

  useEffect(() => {
    setInitialState({
      content: '@umijs/max 更新',
    });
  }, []);

  return (
    <Outlet />
  );
}
