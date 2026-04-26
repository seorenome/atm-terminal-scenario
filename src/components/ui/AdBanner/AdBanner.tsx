import { BannerContainer, BannerImage } from './AdBanner.styled'

type AdBannerProps = {
  src: string
  alt?: string
}

const AdBanner = ({ src, alt = 'Advertisement' }: AdBannerProps) => {
  return (
    <BannerContainer>
      <BannerImage src={src} alt={alt} />
    </BannerContainer>
  )
}

export default AdBanner