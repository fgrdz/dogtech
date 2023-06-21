import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/erro_404.png'

const Banner = ()=>{
    return(
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                DogTech
            </h1>

            <p className={styles.paragrafo}>Boas vindas esse é meu blog sobre tecnologia, espero que aproveite os conteúdos que tenho para você</p>
        </div>

        <div className={styles.imagens}>
            <img className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden= {true}
            />

            <img
                className={styles.minhaFoto}
                src={minhaFoto}
                alt='Foto do perfil'
            />
        </div>
    </div>
    )
}

export default Banner