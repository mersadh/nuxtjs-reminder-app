import axios from "axios";

export default function () {
    const login = async (email: string, password: string) => {
        // implementation of the login function
        const protocol = 'http';
        const hostname = 'localhost:3080';
        const url = `${protocol}://${hostname}/api/v1/auth/login`;

        const headers = {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        };

        const body = JSON.stringify({ email, password });

        try {
            const response = await axios.post(url, body, { headers });
            if (response.data.access_token) {
                return response.data.access_token;
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    return { login };
}
