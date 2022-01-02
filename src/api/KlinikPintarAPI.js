const getProvinces = async () => {
    const response = await fetch('https://klinikpintar.id/api/provinces');
    const data = await response.json();
    return data;
}

export default {
    getProvinces
}