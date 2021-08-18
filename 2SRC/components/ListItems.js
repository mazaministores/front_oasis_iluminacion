import React from 'react'
import Card from './Card'
export default function ListItems(props) {
    return (
        <>
            {props.filters.map(doc =>
                props.search ? <>
                    {<>  <p className="text-search"> Resultados de: {doc}</p>
                        <div key={doc} className="items-container" >

                            {props.articles.map(item =>
                                item.brand.includes(doc.replace(/\b\w/g, l => l.toUpperCase())) ?
                                    <>
                                        <Card key={item.id} id={item.id} brand={item.brand} model={item.model} price={item.price} image={item.image} sizes={item.sizes} />
                                    </>
                                    : <></>
                            )}
                        </div>
                    </>
                    }
                </> : <>
                    {
                        props.articles.some(item => item.categorie === doc) ?
                            <>
                                <h5 className="categorie">{doc}</h5>
                                <div key={doc} className="items-container" >
                                    {props.articles.map(item =>
                                        item.categorie === doc ?
                                            <>
                                                <Card key={item.id} id={item.id} brand={item.brand} model={item.model} price={item.price} image={item.image} sizes={item.sizes} />
                                            </>
                                            : <></>
                                    )}
                                </div>
                            </> : ''
                    }
                </>
            )
            }
        </>
    )
}
