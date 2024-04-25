import { useModel } from '@umijs/max';
export async function getInitialState(): Promise<{ content: string }> {
  return { content: '@umijs/max 初始' };
}

export const useQiankunStateForSlave = () => {
  const { initialState } = useModel('@@initialState');
  const masterState = initialState as { content: string };

  return masterState;
};