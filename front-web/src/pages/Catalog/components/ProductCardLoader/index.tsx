import React from "react"
import ContentLoader from "react-content-loader"

const ProductCardLoader = () => {

    const loaderItems = [0, 1, 2];

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={1}
                    width={240}
                    height={263}
                    viewBox="0 0 240 263"
                    backgroundColor="#ecebeb"
                    foregroundColor="#d6d2d2"

                >
                    <rect x="395" y="187" rx="2" ry="2" width="140" height="10" />
                    <rect x="0" y="60" rx="10" ry="10" width="240" height="263" />
                </ContentLoader>
            ))}


        </>
    )
}
export default ProductCardLoader