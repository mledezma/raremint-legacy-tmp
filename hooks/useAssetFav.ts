// import { useFetcher } from '@remix-run/react'
import { useStore } from '~/store'
import { Asset, AssetId } from '~/types'

export const useAssetFav = () => {
  // ToDo: fix this
  // const { user } = useStore()
  // const fetcher = useFetcher()
  const fetcher = () => {}
  // const { setTopbarMessage } = useStore()
  const toggleAsset = () => {}
  // const toggleAsset = (asset: Asset) => {
  //   const action = asset.user_fav ? 'unlike' : 'like'
  //   if (!user) {
  //     setTopbarMessage(`Please log in to ${action} items`)
  //     return asset
  //   }
  //   fetcher.submit(
  //     {},
  //     {
  //       method: 'post',
  //       action: `/actions/assets/${asset.asset_uri}/${action}`,
  //     },
  //   )
  //   if (action === 'like') return { ...asset, user_fav: true, total_likes: asset.total_likes + 1 }
  //   else return { ...asset, user_fav: false, total_likes: asset.total_likes - 1 }
  // }
  return { fetcher, toggleAsset }
}
