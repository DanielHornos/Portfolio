import "./portfolio.scss"

export default function Portfolio() {

    const items = ['one', 'two', 'three', 'four'];

    const handleClickItem = (item) => {
        console.log('item:', item)
    }

    return (
        <div className="portfolio" id="portfolio">
            portfolio
            <div className="portfolio-container">
                {items.map((item) => {
                    return <div key={item} className={`portfolio-item item-${item}`} onClick={handleClickItem(item)}></div>
                })}
            </div>
        </div>
    )
}

