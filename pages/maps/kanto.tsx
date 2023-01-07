import {NextPage} from "next";
import dynamic from 'next/dynamic'

const KantoMap = dynamic(() => import('../../src/components/screens/kanto'), {
  loading: () => <p>'Loading...'</p>,
})
const MyComponent: NextPage = () => {
  return (
    <KantoMap/>
  );
};

export default MyComponent;
