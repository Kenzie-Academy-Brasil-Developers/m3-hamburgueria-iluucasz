import styles from './style.module.scss';

export const LoadingList = () => {

    return (
        <div className={`${styles.containerLoading}`}>
            <div>Carregando...</div>
        </div>
    )
}