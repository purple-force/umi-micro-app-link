import { Button, Input } from 'antd';
import { useState } from 'react';
import { compute } from '@/worker/compute';
const DocsPage = () => {
  const [text, setText] = useState('');
  const [transformedText, setTransformedText] = useState('');
  return (
    <div>
      <p>This is umi docs.</p>
      <Input value={text} onChange={(e) => {
        setText(e.target.value);
      }}/>
      <Button onClick={() => {
        compute(text).then((res) => {
          setTransformedText(res);
        });
      }}>转换</Button>
      <p>{transformedText}</p>
    </div>
  );
};

export default DocsPage;
