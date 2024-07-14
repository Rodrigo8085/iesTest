export interface IResponseLogin {
    header: {
        codigoOperacionBackend: string,
        codigoRespuesta: string,
        descripcionRespuesta: string,
        tiempoRespuesta: number,
        horaRespuesta: string,
        razonesFalla?: [
            {
                descripcion: string
            }
        ]
    },
    resultado: any
}