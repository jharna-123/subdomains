import {useRouter} from 'next/router';

const UserNamePAge = ()=>{
    const router = useRouter();
    return(
        <>
        <h1>This is a dynamic {router.query.username} page</h1>
        <button onClick={e =>router.push('/user/contactus')}>contactus</button>
        </>
    );
}

export default UserNamePAge;