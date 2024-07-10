type Props = {
    cardImg:any,
    title:string
}
export const HealthCard = (props:Props) => {
    return(
        <div className="flex flex-col mx-1 items-center justify-center p-3 gap-3 h-full w-44 rounded-lg hover:shadow-card-dark cursor-pointer">
            <div className="h-4/5 flex items-center">
                <img className="w-32 h-32" src={props.cardImg} alt="" />
            </div>
            <span className="text-center h-1/5">{props.title}</span>
        </div>
    )
}