const useAuth = () => {
    const user = useState('user', () => null);



    return { user }
}

export default useAuth
