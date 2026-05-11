import { type ReactNode } from 'react'

interface Item {
  id: string
  name: ReactNode
  time: string
  content?: ReactNode
}

interface Props {
  items: Item[]
  hasContent?: boolean
}

export default function ExperiencesList({ hasContent = true, items }: Props) {
  return (
    <ul className="border-l max-sm:border-l-0 border-gray-400/50 dark:border-neutral-600/50 pl-0 list-none">
      {items.map(({ id, name, time, content }) => (
        <li key={id} className={`grid ${hasContent ? 'grid-cols-5 max-sm:grid-cols-1' : 'grid-cols-1'} max-sm:gap-1`}>
          <div className={`ml-5 max-sm:ml-0 w-[calc(100%-20px)] max-sm:w-full pt-[7px]`}>
            <div className="font-bold">{name}</div>
            <div className="text-[80%]">{time}</div>
          </div>
          {hasContent && (
            <div className="col-span-4 max-sm:col-span-1 text-left resume-content">{content}</div>
          )}
        </li>
      ))}
    </ul>
  )
}
