import React, { useState } from 'react'
import { Box } from '~/components/primitives/Box'
import { Button } from '~/components/primitives/Button'
import { Flex } from '~/components/primitives/Flex'
import { Image } from '~/components/primitives/Image'
import { styled, theme } from '~/styles/stitches.config'
import { prisma } from '~/library/prisma'
import { profileValidationSchema  } from '~/library/validations'
import { routes } from '~/library/routes'
import { copyToClipboard } from '~/library/utils'
import { toFormikValidationSchema } from 'zod-formik-adapter'
// import { validationError } from 'remix-validated-form'
// import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
// import { useLoaderData, useFetcher } from '@remix-run/react'
import { AvatarPlaceholder, CopyIcon, TwitterIcon } from '~/components/icons'
import { AlertPage } from '~/components/pages/profile/AlertPage'
import { FormInput } from '~/components/shared/TextInput'
import { Formik } from 'formik'
import _ from 'lodash'
import { useStore } from '~/store'
// import { withZod } from '@remix-validated-form/with-zod'
import { Tooltip } from '~/components/shared/Tooltip'

type ProfileFormData = {
  email: string
  username: string
  twitter: string
  avatar: string
  address: string
}

// ToDO: Review and fix functionality.
// export const validator = withZod(profileValidationSchema)

// export const action: ActionFunction = async ({ request }) => {
//   try {
//     const user = await auth.isAuthenticated(request)
//     const session = await getSession(request.headers.get('Cookie'))
//     if (!user) {
//       const redirect_to = new URL(request.url).pathname
//       const redirectParams = new URLSearchParams([['redirect_to', redirect_to]])
//       return redirect(`${routes.signin}?${redirectParams}`)
//     }
//     const formData = await request.formData()
//     const data = await validator.validate(formData)
//     if (data.error) return validationError(data.error)
//     const { username, twitter, email, avatar } = data.data
//     const profile = await prisma.accounts.update({
//       where: {
//         address: user?.address,
//       },
//       data: avatar ? { username, twitter, email, avatar } : { username, twitter, email },
//     })

//     if (avatar) session.set('avatar', avatar)

//     return json(
//       { ...profile, success: true },
//       {
//         headers: {
//           'Set-Cookie': await commitSession(session),
//         },
//       },
//     )
//   } catch (error) {
//     console.error(error)
//     return json({
//       error: 'An unexpected error occurred. :' + JSON.stringify(error, null, 2),
//     })
//   }
// }

// export const loader: LoaderFunction = async ({ request }) => {
//   const user = await auth.isAuthenticated(request)
//   if (!user) {
//     return redirect('/sign-in?redirect_to=profile')
//   }
//   const profile = await prisma.accounts.findFirst({
//     where: {
//       address: user?.address,
//     },
//   })
//   return json(profile)
// }

const H3 = styled('h3', {
  fontSize: '$chakra-petch-24',
  lineHeight: '$chakra-petch-24',
  fontWeight: '400',
  alignContent: 'center',
  mb: '$regular',
})

const UploadDiv = styled('div', {
  textAlign: 'center',
  borderRadius: '50%',
  height: '200px',
  width: '200px',
  position: 'relative',
  cursor: 'pointer',
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    borderRadius: '50%',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
})

const InputValueDisplay = styled('div', {
  fontSize: '$chakra-petch-18',
  lineHeight: '$chakra-petch-18',
  fontWeight: '$bold',
  '&:first-child': {
    mt: '$regular',
  },
  span: {
    fontWeight: '$regular',
  },
})

const StyledFormInput = styled(FormInput, {
  '& > div': {
    bg: '#e9ecef',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    px: '$x-small',
    py: '$xx-small',
    mt: '$small',
    color: '$pokemon-drop-no-button',
    alignItems: 'center',
  },
})

const ProfilePage = () => {
  // ToDo: Review and fix this part, all comments need to be solved.
  // const refFile = React.useRef<HTMLInputElement>(null)
  // const profile = useLoaderData<ProfileFormData>()
  // const [current_profile, setCurrentProfile] = useState(profile)
  // const [current_avatar, setCurrentAvatar] = useState(profile.avatar || '')
  // const [isEdit, setIsEdit] = React.useState<boolean>(false)
  // const [showTooltip, setShowTooltip] = React.useState<boolean>(false)
  // const setTopbarMessage = useStore.useSetTopbarMessage()
  // const fetcher = useFetcher()

  // const handleUpload = () => {
  //   if (refFile.current) {
  //     !isEdit && setIsEdit(true)
  //     refFile.current.click()
  //   }
  // }

  // const handleChangeFile = async (e: any) => {
  //   const formData = new FormData()
  //   formData.append('image', e.target.files[0])
  //   fetcher.submit(formData, {
  //     method: 'post',
  //     encType: 'multipart/form-data',
  //     action: `/actions/upload/image`,
  //   })
  // }

  // const toggleTooltip = () => {
  //   setShowTooltip(true)
  //   setTimeout(() => {
  //     setShowTooltip(false)
  //   }, 2000)
  // }

  // const handelCopy = () => {
  //   copyToClipboard(current_profile?.address || '')
  //   toggleTooltip()
  // }

  // const onSubmit = async (data: ProfileFormData) => {
  //   const { email, username, twitter } = data
  //   fetcher.submit(
  //     { email, username, twitter, avatar: current_avatar },
  //     {
  //       method: 'post',
  //     },
  //   )
  //   setCurrentProfile({ ...current_profile, email, avatar: current_avatar, username, twitter })

  //   setIsEdit(false)
  // }

  // React.useEffect(() => {
  //   if (fetcher.data?.url) setCurrentAvatar(fetcher.data?.url)
  //   if (fetcher.data?.error) setTopbarMessage(fetcher.data?.error)
  // }, [fetcher])

  // const saving = fetcher.state === 'submitting'

  return (
    <>
      <Flex
        direction={{
          '@initial': 'column',
          '@medium-min': 'row',
        }}
        justify={{
          '@initial': 'start',
          '@medium-min': 'center',
        }}
        css={{
          my: '$large',
          py: '$regular',
          mx: 'auto',
          px: 40,
          maxWidth: '$breakpoint-medium',
          backgroundColor: '$overlay-bg-color',
          borderRadius: 10,
        }}
      >
        <Flex
          direction="column"
          align="center"
          css={{
            width: '100%',
            '@medium-min': {
              width: '50%',
            },
          }}
        >
          <H3>Upload a photo</H3>
          {/* <UploadDiv onClick={handleUpload}>
            {current_avatar ? <Image src={current_avatar} /> : <AvatarPlaceholder />}
          </UploadDiv> */}
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            style={{ display: 'none' }}
            // ref={refFile}
            // onChange={handleChangeFile}
          />
        </Flex>
        <Flex
          direction="column"
          css={{
            width: '100%',
            '@medium-min': {
              width: '50%',
            },
          }}
        >
          {/* ToDO: Needs add the isEdit funcionality. */}
        </Flex>
      </Flex>
    </>
  )
}

export default ProfilePage