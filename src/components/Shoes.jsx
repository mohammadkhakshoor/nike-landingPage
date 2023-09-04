const Shoes = ({ imgURL, currentBigShow, changeBigShoeImage }) => {
    function handleClick() {
        if (currentBigShow !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }
    return (
        <div
            className={` border-2 rounded-xl ${
                currentBigShow === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
            }`}
            onClick={handleClick}
        >
            <div className="sm:w-40 sm:h-40 w-[5.5rem]  h-[5.5rem]  bg-card bg-center bg-cover p-4 rounded-xl ">
                <img width={150} height={150} src={imgURL.thumbnail} alt="shoe collection" />
            </div>
        </div>
    );
};

export default Shoes;
