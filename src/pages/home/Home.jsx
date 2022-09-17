import { Directory } from '../../components/directory/Directory'
import {ToastsContainer, ToastsStore} from 'react-toasts';
function Checking() {
    return <div>
        <button onClick={() => ToastsStore.error("Hey, you just clicked!")}>Click me</button>
        <ToastsContainer store={ToastsStore}/>
    </div>
}

const Home = () => {
    return (
        <div>
        <Directory />
        <Checking  />
        </div>
    );
}

export {Home};