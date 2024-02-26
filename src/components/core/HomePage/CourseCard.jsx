

const CourseCard = ({cardData, currentCard, setCurrentCard})=>{
    return(
        <div className="flex flex-col ">
            <div>
                {cardData.heading}
            </div>

            <div>
                {cardData.description}
            </div>
            
            <div>

            <div className="flex flex-row items-center">
                {cardData.level}
            </div>
            <div>
                {cardData.lessionNumber}
            </div>
                
            </div>

        </div>
    )
}

export default CourseCard;