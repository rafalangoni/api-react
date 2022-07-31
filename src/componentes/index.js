import { useEffect } from "react";

const ChamadaAPI = () => {
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://api.adviceslip.com/advice');
            const response = data.json();
            return response;

        }
        const resultado = fetchData()
        return (
            console.log(resultado)
        )
    }
    )

}

export default ChamadaAPI;