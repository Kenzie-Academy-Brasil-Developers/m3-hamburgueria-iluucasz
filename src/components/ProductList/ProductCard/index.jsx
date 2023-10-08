import style from './style.module.scss'

export const ProductCard = ({ product, addCart }) => {
    return (
        <>
            <li className={style.containerCard}>
                <div className={style.card}>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className={style.description}>
                    <h3 className="heading3">{product.name}</h3>
                    <span className={`${style.category} caption`}>{product.category}</span>
                    <span className={`${style.price} b600`}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                    <button className="btn small" onClick={() => addCart(product)}>Adicionar</button>
                </div>
            </li>
        </>
    )
}