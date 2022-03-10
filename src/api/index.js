const API_END_POINT = process.API_END_POINT;

export const request = async (URL) => {
    try {
        const res = await fetch(`${API_END_POINT}${URL}`);

        if (!res.ok) {
            throw new Error('Fail to call api');
        }

        return await res.json();
    } catch (error) {
        console.error(error);
    }
};
