import { Dispatch, SetStateAction } from 'react'
interface Iprops {
    data: { tittle: string, value: string }[],
    onChange: Dispatch<SetStateAction<string>>
}

export const SelectSubtittles = ({ data, onChange }: Iprops) => {
    return (
        <select className='text-primary-800 text-md font-bold lg:hidden mt-8 font-garden_regular' onChange={({ target }) => onChange(target.value)} >
            {data.map((obj, i) => <option key={i} value={obj.value} >{obj.tittle}</option>)}
        </select>
    )
}
