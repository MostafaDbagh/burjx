import downImage from '../assests/images/downImage.png'
import playicon from '../assests/images/playicon.jpg'
import { FaApple } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useI18n } from '../hooks/useI18n' 

export default function Hero() {
  const { t , isRTL } = useI18n('downloadApp') 

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight" style={{ color: '#374151' }}>
            {t('downloadApp.title')}
          </h1>
          <p className="mt-4 text-lg" style={{ color: '#686868' }}>
            {t('downloadApp.subtitle')}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* App Store button */}
            <Link
              to={''}
              className="inline-flex text-decoration-none text-white bg-black items-center gap-3 rounded-2xl px-2 py-1 shadow-md hover:shadow-lg transition-shadow"
              aria-label={t('downloadApp.appstore.aria')}
            >
              <FaApple className="w-15 h-15" />
              <div className="text-left">
                <div className="text-xs">{t('downloadApp.appstore.small')}</div>
                <h3 className="font-semibold">{t('downloadApp.appstore.title')}</h3>
              </div>
            </Link>

            {/* Google Play button */}
            <Link
              to={''}
              className="inline-flex text-decoration-none bg-black text-white items-center gap-3 rounded-2xl px-2 py-1 shadow-md hover:shadow-lg transition-shadow"
              aria-label={t('downloadApp.googleplay.aria')}
            >
              <img src={playicon} className="w-12 h-12" />
              <div className="text-left">
                <div className="text-xs">{t('downloadApp.googleplay.small')}</div>
                <h2 className="font-semibold">{t('downloadApp.googleplay.title')}</h2>
              </div>
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 sm:w-80 md:w-96">
            <img
              src={downImage}
              alt={t('downloadApp.imageAlt')}
              width={420}
              height={420}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
