import { Cloudinary } from '@cloudinary/url-gen'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { Asset } from '~/types'

export type CloudinaryAsset = {
  asset_name: string
  asset_tier: string
  cloudinary_id: string
}

export const base_url = 'https://res.cloudinary.com/raremint/image/upload'

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'raremint',
  },
})

export const getCloudinaryImage = (image_id: string) => {
  const image = cld.image(image_id)
  image.addFlag('progressive:semi')
  return image
}

export const getCloudinaryVideo = (video_id: string, video_quality?: number) => {
  const video = cld.video(video_id)
  return video_quality ? video.delivery(quality(video_quality)) : video
}

export const getCloudinaryAppImage = (image_id: string) =>
  getCloudinaryImage(`application_assets/${image_id}`)

export const getCloudinaryAppVideo = (video_id: string) =>
  getCloudinaryVideo(`application_assets/${video_id}`, 100)

export const getCloudinaryAssetImage = (asset: Asset) => {
  const cloudinary_asset = cloudinary_assets.find(
    (a) => a.asset_name === asset.name && a.asset_tier === asset.tier,
  )
  if (!cloudinary_asset) return null
  return getCloudinaryImage(`asset_thumbnails/${cloudinary_asset.cloudinary_id}`)
}

export const cloudinary_assets: CloudinaryAsset[] = [
  {
    asset_name: '1989/90 Michael Jordan Game Worn Jersey',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'jordan_ultra_rare_wbfuuy',
  },
  {
    asset_name: '1989/90 Michael Jordan Game Worn Jersey',
    asset_tier: 'Limited Edition',
    cloudinary_id: 'jordan_limited_edition_fb1alm',
  },
  {
    asset_name: '1930 Lou Gehrig Home Run Ball Auto by Gehrig & Ruth',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'gehrig_ultra_rare_jdeouh',
  },

  {
    asset_name: '1930 Lou Gehrig Home Run Ball Auto by Gehrig & Ruth',
    asset_tier: 'Limited Edition',
    cloudinary_id: 'gehrig_limited_edition_uovxek',
  },
  {
    asset_name: '1991 Dan Marino Game Worn Helmet Signed',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'marino_ultra_rare_xsyakz',
  },

  {
    asset_name: '1991 Dan Marino Game Worn Helmet Signed',
    asset_tier: 'Limited Edition',
    cloudinary_id: 'marino_limited_edition_akpvhs',
  },
  {
    asset_name: '1930 FIFA World Cup Jules Rimet Trophy',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'rimet_ultra_rare_gnl1rg',
  },

  {
    asset_name: '1930 FIFA World Cup Jules Rimet Trophy',
    asset_tier: 'Limited Edition',
    cloudinary_id: 'rimet_limited_edition_pnt0op',
  },
  {
    asset_name: 'Bryce Harper Signed and Inscribed Jersey',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'harper_ultra_rare_j1t4re',
  },
  {
    asset_name: 'Dwyane Wade Signed Basketball',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'wade_ultra_rare_hafqdu',
  },
  {
    asset_name: 'Luka Doncic Signed Mavericks Engraved Logo Basketball',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'luka_ultra_rare_q0si6f',
  },
  {
    asset_name: 'Stephen Curry Signed NBA The Finals Basketball 1',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'curry_a_ultra_rare_nx1kdk',
  },
  {
    asset_name: 'Stephen Curry Signed NBA The Finals Basketball 2',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'curry_b_ultra_rare_r270kn',
  },
  {
    asset_name: 'Tyler Herro Signed and Inscribed Basketball',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'luka_ultra_rare_q0si6f',
  },
  {
    asset_name: 'Stephen Curry 2015 Dual Signed And Inscribed Photo Matched Game Worn Shoes',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'curry_shoes_ultra_rare_gd6wz2',
  },
  {
    asset_name: 'Stephen Curry 2015 Dual Signed And Inscribed Photo Matched Game Worn Shoes',
    asset_tier: 'Limited Edition',
    cloudinary_id: 'curry_shoes_limited_edition_qmnkv4',
  },
  {
    asset_name: 'Ansu Fati Signed FC Barcelona Soccer Ball',
    asset_tier: 'Ultra Rare',
    cloudinary_id: 'fati_ultra_rare_fvsdgm',
  },
]
