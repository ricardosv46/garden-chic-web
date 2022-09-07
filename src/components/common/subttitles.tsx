import { Dispatch, SetStateAction } from 'react'
interface Iprops {
    data: { tittle: string, value: string }[],
    onChange: Dispatch<SetStateAction<string>>
}
export const Subttitles = ({ data, onChange }: Iprops) => {
    return (
        <ol className='hidden flex-col lg:flex-row gap-3 mt-8 lg:flex font-garden_regular'>
            {data.map((obj, i) => <li key={i} className='text-garden-option1 text-md font-bold cursor-pointer' onClick={() => onChange(obj.value)}>{obj.tittle}</li>)}
        </ol>
    )
}
