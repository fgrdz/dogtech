import styles from './SobreMim.module.css'

import fotoCapa from 'assets/sobre-mim-capa.jpg'
import PostModelo from 'componentes/PostModelo'



const SobreMim = ()=>{
    return(
       <PostModelo
        fotoCapa={fotoCapa}
            titulo='Sobre Mim'
       >
            <h3 className={styles.subtitulo}>Olá eu sou julio</h3>
            <p className={styles.paragrafo}>
                Eu me chamo Julio, sou estudante de Análise e Desenvolvimento de sistemas, e grande entusiasta de tecnologia.
                Estou no mundo da programação desde o ensino médio, no Instituto Federal da Paraíba(IFPB), onde cursei informática.
                Decidi criar esse blog para compartilhar minha paixão por esse universo com mais pessoas.
            </p>
            <p className={styles.paragrafo}>
                Aqui você irá encontrar vários conteúdos legais, desde posts técnicos, até atualidades e assuntos quentes do momento na bolha tech.
            </p>
       </PostModelo>
    )
}

export default SobreMim