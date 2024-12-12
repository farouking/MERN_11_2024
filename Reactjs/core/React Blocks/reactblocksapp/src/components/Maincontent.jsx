import '../App.css';
import SubContents from '../Components/SubContent';
import Advertisement from '../components/Advertisment'

const Main = () => {
    return (
        <div className='Main'>
            <div className='container-2'>
                <SubContents />
                <SubContents />
                <SubContents />
            </div>
            <Advertisement />
        </div>
    )
}

export default Main