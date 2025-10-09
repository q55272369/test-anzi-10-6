/* eslint-disable @next/next/no-img-element */
import { useScreenSize } from '@/src/hooks/useScreenSize'
import { ProfileWidgetType } from '@/src/lib/blog/format/widget/profile'
import { classNames, isValidUrl } from '@/src/lib/util'
import Link from 'next/link'
import { DynamicIcon } from '../DynamicIcon'
import ImageWithPlaceholder from '../image/ImageWithPlaceholder'
import { WidgetContainer } from './WidgetContainer'

const LinkIcon = ({ icon, hasId }: { icon: string; hasId: boolean }) => {
  const { isMobile, isTablet, isDesktop, isWidescreen } = useScreenSize()

  let iconSize
  if (isMobile || isTablet) {
    iconSize = 15
  }
  if (isDesktop) {
    iconSize = isDesktop && hasId ? 15 : 20
  }
  if (isWidescreen) {
    iconSize = hasId ? 20 : 30
  }

  if (icon === '') {
    return (
      <DynamicIcon
        nameIcon="FaQuestionCircle"
        propsIcon={{
          size: iconSize,
        }}
      />
    )
  }
  if (isValidUrl(icon) || icon.startsWith('/')) {
    return (
      <img
        className="aspect-sqaure"
        height={iconSize}
        width={iconSize}
        src={icon}
        alt={'social-logo'}
      />
    )
  }
  return (
    <DynamicIcon
      nameIcon={icon}
      propsIcon={{
        size: iconSize,
      }}
    />
  )
}

export const ProfileWidget = ({ data }: { data: ProfileWidgetType }) => {
  return (
    <WidgetContainer>
      <div className="w-full h-full">
        <div className="flex h-[72%] w-full flex-col items-start overflow-hidden px-3.5 pt-3.5 md:h-3/5 md:flex-row md:items-center md:justify-start md:space-x-3 md:px-3 md:py-2.5 lg:space-x-4 lg:px-5 lg:py-4">
          <div className="h-full overflow-hidden rotate-0 aspect-square rounded-2xl sm:mb-0 md:rounded-full">
            <ImageWithPlaceholder
              src={data.logo.src}
              width={data.logo.info.width}
              height={data.logo.info.height}
              blurDataURL={data.logo.info.placeholder}
              alt="portrait"
              className="overflow-hidden rounded-2xl md:rounded-full"
            />
          </div>
          <div className="mt-2 flex flex-col justify-between gap-0.5 text-black dark:text-white md:mt-0">
            <h1 className="mb-2 text-base font-semibold tracking-tighter line-clamp-1 sm:mb-3 sm:text-base sm:tracking-normal md:mb-0 md:text-xl md:font-medium lg:text-2xl">
              {data.name}
            </h1>
            <h2 className="hidden text-sm md:line-clamp-1 lg:text-sm">
              {data.description}
            </h2>
          </div>
        </div>
        <div
          className={classNames(
            'h-[28%] w-full md:h-2/5',
            'md:bg-neutral-100 md:dark:bg-neutral-800'
          )}
        >
          <div className="scrollbar-hide flex h-full w-full flex-row items-center justify-center  overflow-scroll px-3.5 pt-1 pb-3 font-medium md:justify-center md:gap-x-1  md:py-2 lg:px-5 lg:py-3 lg:text-sm">
            {/* {data.links.map((link, index) => (
              console.log(link,"-------------------")
             
            ))} */}
             <Link
                key={'aaa'}
                href={'/about'}
                // target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  'leading-0 w-full transform cursor-pointer items-center justify-center rounded-lg text-white transition duration-300 ease-in-out hover:scale-95 md:h-full md:w-auto md:rounded-xl lg:rounded-2xl',
                  true
                    ? 'aspect-square md:aspect-auto md:gap-x-0.5 md:px-1.5 lg:gap-x-1.5 lg:px-3'
                    : 'aspect-square',
                  'bg-gradient-to-tr',
                  'from-neutral-300 dark:from-neutral-700',
                  'to-neutral-200 dark:to-neutral-600',
                   'flex'
                )}
                style={{
                  backgroundImage: 'linear-gradient(to top right, #0d1117, #0d2235) !important',
                }}
              >
                <LinkIcon icon={'CiFolderOn'} hasId={!!true} />
                <p className="hidden md:block md:text-xs lg:text-base">
                  {'资源介绍'}
                </p>
                <span>👀</span>
              </Link>

              <Link
                key={'bbb'}
                href={'/shouhou'}
                // target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  'leading-0 w-full transform cursor-pointer items-center justify-center rounded-lg text-white transition duration-300 ease-in-out hover:scale-95 md:h-full md:w-auto md:rounded-xl lg:rounded-2xl',
                  true
                    ? 'aspect-square md:aspect-auto md:gap-x-0.5 md:px-1.5 lg:gap-x-1.5 lg:px-3'
                    : 'aspect-square',
                  'bg-gradient-to-tr',
                  'from-neutral-300 dark:from-neutral-700',
                  'to-neutral-200 dark:to-neutral-600',
                   'flex'
                )}
                style={{
                  backgroundImage: 'linear-gradient(to top right, #FF69B4, #bf65ad) !important',
                }}
              >
                <LinkIcon icon={'LiaCrownSolid'} hasId={!!true} />
                <p className="hidden md:block md:text-xs lg:text-base">
                  {'入会说明'}
                </p>
                <span>👀</span>
              </Link>

               <Link
                key={'ccc'}
                href={'/download'}
                // target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  'leading-0 w-full transform cursor-pointer items-center justify-center rounded-lg text-white transition duration-300 ease-in-out hover:scale-95 md:h-full md:w-auto md:rounded-xl lg:rounded-2xl',
                  true
                    ? 'aspect-square md:aspect-auto md:gap-x-0.5 md:px-1.5 lg:gap-x-1.5 lg:px-3'
                    : 'aspect-square',
                  'bg-gradient-to-tr',
                  'from-neutral-300 dark:from-neutral-700',
                  'to-neutral-200 dark:to-neutral-600',
                   'flex'
                )}
                style={{
                  backgroundImage: 'linear-gradient(to top right, #0a69c6, #0088fa) !important',
                }}
              >
                <LinkIcon icon={'FaDownload'} hasId={!!true} />
                <p className="hidden md:block md:text-xs lg:text-base">
                  {'下载方式'}
                </p>
                <span>👀</span>
              </Link>
          </div>
        </div>
      </div>
    </WidgetContainer>
  )
}
