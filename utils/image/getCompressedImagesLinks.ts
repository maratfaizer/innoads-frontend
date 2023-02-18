import React, { Dispatch } from 'react'

import postImage from '../api/postImage'

import handleImageResize from './handleImageUpload'

const getCompressedImagesLinks = async (imagesFromInput: FileList, setImages: Dispatch<React.SetStateAction<string[]>>) => {
    for (let i = 0; i < imagesFromInput.length; i++) {
        const initialImage: File = imagesFromInput[i]
        const resizedImage = await handleImageResize(initialImage)
        if (resizedImage) {
            const formData = new FormData()
            formData.append('image', resizedImage, resizedImage.name)
            const { status, value } = await postImage(formData)
            if (status === 'ok') {
                setImages((prevState: string[]) => [...prevState, value])
            }
        }
    }
}
export default getCompressedImagesLinks
