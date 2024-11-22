import { MMKV } from 'react-native-mmkv'
import { SearchHistoryGateway } from './SearchHistoryGateway'

const key = 'history'

export class DiskSearchHistoryGatewayImpl implements SearchHistoryGateway {
  private mmkv: MMKV = new MMKV()

  history: () => Promise<string[]> = async () => {
    let history: string[] = []
    if (this.mmkv.contains(key)) {
      const json = this.mmkv.getString(key)
      if (json) {
        history = JSON.parse(json)
      }
    }
    return history
  }

  add: (query: string) => Promise<void> = async query => {
    const history = await this.history()
    history.push(query)
    this.mmkv.set(key, JSON.stringify(history))
  }

  clear: () => Promise<void> = async () => {
    this.mmkv.delete(key)
  }
}
