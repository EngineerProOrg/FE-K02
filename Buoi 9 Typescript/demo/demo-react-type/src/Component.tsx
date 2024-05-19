import { FC, useState } from 'react';

interface ComponentAProps {
  title: string;
}


export const ComponentA: FC<ComponentAProps> = (props) => {
  const [name, setName] = useState<string>()

  return <div>

  </div>
}