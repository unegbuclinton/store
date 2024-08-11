import { icons } from './svg'

export default function StoreIcon({ iconName }: { iconName: string }) {
  return <i>{icons[iconName]}</i>
}
