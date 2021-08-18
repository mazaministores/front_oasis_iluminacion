import React from 'react';
import PencilIcon from '../icons/Pencil';
import DeleteIcon from '../icons/Delete'

export default function CardMaster({
    id, brand, model, price,
    image, deleteArticle, categorie,
    activeUpdateArticle }) {

    const article = {
        id: id,
        image: image,
        brand: brand,
        model: model,
        price: price,
        categorie: categorie
    }

    return (
        <div className="card master">
            <div className="card-info">
                <span className="brand-text">{brand}</span>
                <span className="model-text">{model}</span>
                <span className="brand-text">{categorie}</span>
                <div className="container-add">
                    <span className="item-price-text"> ${price}</span>
                </div>
            </div>
            <div className="card-image">
                <img src={image} alt={model} className="item-image-master" loading="lazy" />
            </div>
            <div className="action-articles-btns">
                <div onClick={() => activeUpdateArticle(article)} className="icon"> <PencilIcon /></div>
                <div onClick={() => deleteArticle(id)} className="icon"><DeleteIcon /> </div>
            </div>
        </div>
    )
}