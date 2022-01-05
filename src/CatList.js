import React from 'react'

export default function CatList(props) {
  const renderCats = () => (
    props.catPics.map(cat => {
      return <img key={cat.id} src={cat.source_url} alt={`cat ${cat.id}`}></img>
    })
  )
  return (
    <div>
      {renderCats()}
    </div>
  )
}
