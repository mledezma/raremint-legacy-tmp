import cloudinary, { UploadApiResponse } from 'cloudinary'
import { backend_secrets, build_flags } from '~/environment'
import util from 'util'

export const print = (arg: any) =>
  console.log(util.inspect(arg, { showHidden: false, depth: null, colors: true }))

cloudinary.v2.config({
  cloud_name: build_flags.cloudinary.cloud_name,
  api_key: build_flags.cloudinary.api_key,
  api_secret: backend_secrets.cloudinary_api_secret,
})

async function uploadImageToCloudinary(data: AsyncIterable<Uint8Array>) {
  const uploadPromise = new Promise<UploadApiResponse | undefined>(async (resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      {
        public_id: new Date().getTime().toString(),
        folder: '/raremint',
      },
      (error, result) => {
        if (error && !result) {
          reject(error)
          return
        }
        resolve(result)
      },
    )
    // await writeAsyncIterableToWritable(data, uploadStream)
    // TODO: fix me
  })

  return uploadPromise
}

const uploadHandlerCloudinary = {}

// const uploadHandlerCloudinary = unstable_composeUploadHandlers(async ({ name, data, filename }) => {
//   if (name !== 'image' || !filename) {
//     return undefined
//   }
//   const uploadedImage = await uploadImageToCloudinary(data)
//   return uploadedImage?.secure_url
// })

export { uploadHandlerCloudinary }
